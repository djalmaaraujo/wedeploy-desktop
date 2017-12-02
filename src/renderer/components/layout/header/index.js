// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'

// Style
import './index.css'
import ICON_WEDEPLOY from '../../../../../static/wedeploy.png'
import ICON_SETTINGS from '../../../../../static/settings.png'

export default class Header extends React.Component {
  openConsole() {
    ipcRenderer.send('sys:openConsoleURL')
  }

  openSettings() {
    ipcRenderer.send('sys:toggleSettings')
  }

  render() {
    return (
      <header className="header">
        <div className="header__column">
        <img
          src={ICON_WEDEPLOY}
          alt="Wedeploy.com"
          className="header__icon"
          onClick={this.openConsole.bind(this)} />
        </div>

        <div className="header__column">
          <img
            src={ICON_SETTINGS}
            alt="Settings"
            className="header__icon header__icon--settings"
            onClick={this.openSettings.bind(this)} />
        </div>
      </header>
    )
  }
}
