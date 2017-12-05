// Modules
import React from 'react'

// Style
import './index.css'

import ICON_WEDEPLOY from '../../../../static/wedeploy.png'

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <img
        src={ICON_WEDEPLOY}
        className="login__logo"
        alt="Wedeploy.com" />

        <h1 className="login__header">Log into your account</h1>
        <p className="login__disclaimer">Looks like you don't have the WeDeploy Command-Line Interface or you are not logged in correctly. You need to be logged in with the CLI.</p>

        <button
          type="button"
          className="login__button">Learn how</button>
      </div>
    )
  }
}
