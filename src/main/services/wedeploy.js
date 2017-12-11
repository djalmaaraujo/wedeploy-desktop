// Electron
import { app, ipcMain, shell } from 'electron'
import path from 'path'
import fs from 'fs'
import ini from 'ini'
import fetch from 'electron-fetch'
import io from 'socket.io-client'
import querystring from 'querystring'

// Custom
import Config from './config'
import ProjectNotification from './notification'

const userWeFilePath = `${app.getPath('home')}/.we`
const API_PATH = Config.get('API_PATH')
const loggedIn = false

let weConfigFile;
let userToken = null;

const getToken = () => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(userWeFilePath)) {
      weConfigFile = ini.parse(fs.readFileSync(userWeFilePath, 'utf8'))
      userToken = weConfigFile['remote "wedeploy"'].token

      if (!userToken) return reject('no token found on file')

      return resolve(userToken)
    }

    return reject('we file not found')
  })
}

const fetchAPI = (path, cb) => {
  return fetch(`${API_PATH}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
}

const bindSocket = () => {
  return io.connect(
    `${API_PATH}/subscribe/user/projects`,
    {
      query: querystring.stringify({
        accessToken: userToken
      }),
      forceNew: false,
      transports: [ 'websocket' ]
    }
  )
}

const fetchProjects = () => fetchAPI('projects?order=desc&field=latestActivity').then(res => {
  const jsonPromise = res.json()
  ProjectNotification(jsonPromise)
  return jsonPromise
})

const fetchUser = () => fetchAPI('user').then(res => res.json())
const fetchAccountUsage = () => fetchAPI('account/usage/top').then(res => res.json())
const fetchAccountUsageDetails = () => fetchAPI('account/usage').then(res => res.json())

const grabData = (cb) => {
  getToken().then(() => {
    return Promise.all([
      fetchProjects(),
      fetchUser(),
      fetchAccountUsage(),
      fetchAccountUsageDetails(),
    ])
      .then(([projects, user, accountUsage, usageDetails]) => cb({ projects, user, accountUsage, usageDetails, loggedIn: true }))
      .catch(() => cb({ offline: true }))
  }).catch((reason) => {
    console.log('Error: ', reason)
    return cb({ loggedIn: false })
  })
}

const We = {
  watch(cb) {
    getToken().then((token) => {
      // Real time listener
      const socker = bindSocket()

      socker.on('changes', (data) => grabData(cb))
      socker.on('connect', () => console.log('connected'))
      socker.on('disconnect', () => console.log('connected'))

      // Event Listener from UI
      ipcMain.on('api:data', () => grabData(cb))
    }).catch((reason) => {
      console.log('Error: ', reason)
      return cb({ loggedIn: false })
    })
  }
}

export default We
