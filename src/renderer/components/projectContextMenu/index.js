// Electron
import { ipcRenderer } from 'electron'

// Modules
import React from 'react'

// Style
import './index.css'

export default class ProjectContextMenu extends React.Component {
  openContextMenu() {
    ipcRenderer.send('sys:openProjectContextMenu', this.props.projectId)
  }

  render() {
    return (
      <button
        className="project__contextMenu"
        type="button"
        onClick={this.openContextMenu.bind(this)}></button>
    );
  }
}
