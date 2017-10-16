import { app } from 'electron'
import path from 'path'
import fs from 'fs'
import ini from 'ini'
import fetch from 'electron-fetch'
import io from 'socket.io-client'
import querystring from 'querystring'

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

const fetchProjects = () => {
  return fetchAPI('projects?order=desc&field=latestActivity').then(res => res.json())
}

const We = {
  watch(cb) {
    bindSocket().on('changes', (data) => {
      fetchProjects().then(projects => cb(projects))
    })
  },

  fetchProjects: fetchProjects
}

export default We