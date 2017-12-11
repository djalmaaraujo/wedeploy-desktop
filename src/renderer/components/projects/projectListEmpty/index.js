// Electron
import { ipcRenderer } from 'electron'

// Modules
import React from 'react'

// Style
import './index.css'

import ICON_WEDEPLOY from '../../../../../static/wedeploy.png'

export default class ProjectListEmpty extends React.Component {
  openLearnHow() {
    ipcRenderer.send('sys:openURL', 'https://console.wedeploy.com/projects/new-project')
  }

  render() {
    return (
      <div className="projectListEmpty">
        <h1 className="projectListEmpty__header">No Projects Found</h1>

        <p className="projectListEmpty__disclaimer">Oops! Looks like you don't have any projects yet. <br /> Let's create one?</p>

        <button
          type="button"
          className="projectListEmpty__button">New Project</button>
      </div>
    )
  }
}
