// Electron
import { ipcRenderer } from 'electron'

// Modules
import React from 'react'

// Style
import './index.css'

import ICON_WEDEPLOY from '../../../../static/wedeploy.png'

export default class Login extends React.Component {
  openLearnHow() {
    ipcRenderer.send('sys:openURL', 'https://wedeploy.com/docs/intro/using-the-command-line/')
  }

  render() {
    return (
      <div className="login">
        <h1 className="login__header">Log into your account</h1>

        <img
        src={ICON_WEDEPLOY}
        className="login__logo"
        alt="Wedeploy.com" />

        <p className="login__disclaimer">Hello! To access all features, you need to be logged in with the WeDeploy Command-Line Interface.</p>

        <button
          type="button"
          onClick={this.openLearnHow.bind(this)}
          className="login__button">Learn how</button>
      </div>
    )
  }
}
