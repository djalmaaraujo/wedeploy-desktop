// Electron
import { ipcRenderer } from 'electron'

// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom'
import React from 'react'
import Main from './components/main'

// Code
const state = {
  loggedIn: true
}

ipcRenderer.on('api:data', function(event, data) {
  state.offline = data.offline
  state.loggedIn = data.loggedIn
  state.projects = data.projects || []
  state.user = data.user
  state.accountUsage = data.accountUsage
  state.usageDetails = data.usageDetails

  renderAPP(state)
})

const renderAPP = (state) => {
  ReactDOM.render(
    <Main state={state} />,
    document.getElementById('app')
  )
}

renderAPP(state)
