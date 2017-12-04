// Electron
import { app, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'
import ini from 'ini'
import fetch from 'electron-fetch'
import io from 'socket.io-client'
import querystring from 'querystring'

// Custom
import Config from './config'

const weConfigFile = ini.parse(fs.readFileSync(`${app.getPath('home')}/.we`, 'utf8'))
const userToken = weConfigFile['remote "wedeploy"'].token
const API_PATH = 'https://api.wedeploy.com'

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

const fetchProjects = () => fetchAPI('projects?order=desc&field=latestActivity').then(res => res.json())
const fetchUser = () => fetchAPI('user').then(res => res.json())

const grabData = (cb) => {
  return Promise.all([fetchProjects(), fetchUser()]).then(([projects, user]) => cb({ projects, user }))
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
