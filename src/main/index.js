'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'
import ini from 'ini'
import fetch from 'electron-fetch'
import menubar from 'menubar'

const isDevelopment = process.env.NODE_ENV !== 'production'
const file = ini.parse(fs.readFileSync(`${app.getPath('home')}/.we`, 'utf8'))
const userToken = file['remote "wedeploy"'].token
const API_PATH = 'https://api.wedeploy.com'
const url = isDevelopment
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : `file://${__dirname}/index.html`

const fetchAPI = (path, cb) => {
  return fetch(`${API_PATH}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
}

const bindListeners = () => {
  ipcMain.on('api:projects', function(event, arg) {
    fetchAPI('projects')
      .then(res => res.json())
      .then(projects => {
        event.sender.send('api:projects', projects)
      })
  })
}

const mb = menubar({
  index: url,
  showDockIcon: true,
  icon: 'IconTemplate.png',
  alwaysOnTop: true
})

mb.on('after-show', () => {
  mb.window.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  if (isDevelopment) {
    mb.window.openDevTools()
  }

  bindListeners()
})