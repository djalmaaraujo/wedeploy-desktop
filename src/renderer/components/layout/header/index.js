// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'

// CSS
import './index.css'

export default class Header extends React.Component {
  openConsole() {
    ipcRenderer.send('sys:openURL', 'https://console.wedeploy.com')
  }

  openSettings() {
    ipcRenderer.send('sys:toggleSettings')
  }

  render() {
    return (
      <header className="header">
        <div className="header__column">
        <img
        src="wedeploy.png"
        alt="Wedeploy.com"
            className="header__icon"
        onClick={this.openConsole.bind(this)} />
        </div>

        <div className="header__column">
          <img
            src="settings.png"
            alt="Settings"
            className="header__icon header__icon--settings"
            onClick={this.openSettings.bind(this)} />
        </div>
      </header>
    )
  }
}
