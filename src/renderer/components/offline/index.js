// Electron
import { ipcRenderer } from 'electron'

// Modules
import React from 'react'

// Style
import './index.css'

import ICON_WEDEPLOY from '../../../../static/wedeploy.png'

export default class Offline extends React.Component {
  openLearnHow() {
    ipcRenderer.send('sys:openURL', 'https://wedeploy.com/docs/intro/using-the-command-line/')
  }

  render() {
    return (
      <div className="offline">
        <h1 className="offline__header">Check your internet connection</h1>

        <img
          src={ICON_WEDEPLOY}
          className="offline__logo"
          alt="Wedeploy.com" />

        <p className="offline__disclaimer">Oops! Looks like your internet is not working as expected. We'll keep trying to connect, don't worry.</p>
      </div>
    )
  }
}
