// Electron
import { app, ipcMain, shell } from 'electron'
import path from 'path'
import fs from 'fs'
import ini from 'ini'
import fetch from 'electron-fetch'
import io from 'socket.io-client'
import querystring from 'querystring'
import notifier from 'node-notifier'

// Custom
import Config from './config'

const userWeFilePath = `${app.getPath('home')}/.we`
const API_PATH = Config.get('API_PATH')
const loggedIn = false
const HEALTH_STATUS = Config.get('HEALTH_STATUS')

let weConfigFile;
let userToken;

const isLogged = () => {
  if (fs.existsSync(userWeFilePath)) {
    weConfigFile = ini.parse(fs.readFileSync(userWeFilePath, 'utf8'))
    userToken = weConfigFile['remote "wedeploy"'].token

    if (!userToken) return false

    return true
  }

  return false
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

const AnalyseHealth = (pJson) => {
  pJson.then((projects) => {
    const status = projects.reduce((acc, p) => {
      if (acc === false || p.health === HEALTH_STATUS.unhealthy) return false

      return true
    }, true)

    if (!status) {
      notifier.notify({
        title: 'Something is wrong',
        message: 'You just got an unhealthy alert from your projects',
        wait: true
      })

      notifier.on('click', function (notifierObject, options) {
        shell.openExternal(Config.get('URLS').urlConsole)
      })
    }
  })
}

const fetchProjects = () => fetchAPI('projects?order=desc&field=latestActivity').then(res => {
  const json = res.json()
  AnalyseHealth(json)
  return json
})

const fetchUser = () => fetchAPI('user').then(res => res.json())
const fetchAccountUsage = () => fetchAPI('account/usage/top').then(res => res.json())
const fetchAccountUsageDetails = () => fetchAPI('account/usage').then(res => res.json())

const grabData = (cb) => {
  if (!isLogged()) {
    return cb({loggedIn: false})
  }

  return Promise.all([
    fetchProjects(),
    fetchUser(),
    fetchAccountUsage(),
    fetchAccountUsageDetails(),
  ])
    .then(([projects, user, accountUsage, usageDetails]) => cb({ projects, user, accountUsage, usageDetails, loggedIn: true }))
    .catch(() => cb({ offline: true, loggedIn: isLogged() }))
}

const We = {
  watch(cb) {
    // Real time listener
    // Disabling realtime until wedeploy fixes health realtime issue
    // bindSocket().on('changes', (data) => grabData(cb))

    // Event Listener from UI
    ipcMain.on('api:data', () => grabData(cb))
  }
}

export default We
