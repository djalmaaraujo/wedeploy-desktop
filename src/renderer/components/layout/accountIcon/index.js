// Modules
import React from 'react'

// Style
import './index.css'

export default class AccountIcon extends React.Component {
  render() {
    return (
      <button className="accountIcon" type="button">
        <img className="accountIcon__avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
      </button>
    )
  }
}
