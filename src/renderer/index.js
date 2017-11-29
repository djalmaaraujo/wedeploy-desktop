// Electron
import { ipcRenderer } from 'electron'

// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom'
import React from 'react'
import Main from './components/main'

// Code
const state = {}

ipcRenderer.on('api:projects', function(event, projects) {
  state.projects = projects

  renderAPP(state)
})

const renderAPP = (state) => {
  ReactDOM.render(
    <Main state={state} />,
    document.getElementById('app')
  )
}

renderAPP(state)
