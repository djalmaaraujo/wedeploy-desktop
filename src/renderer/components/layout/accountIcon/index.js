// Modules
import React from 'react'
import md5 from 'md5'

// Style
import './index.css'

export default class AccountIcon extends React.Component {
  render() {
    if (!this.props.user) return null

    return (
      <button className="accountIcon" type="button">
        <img className="accountIcon__avatar" src={`https://www.gravatar.com/avatar/${md5(this.props.user.username)}`} />
      </button>
    )
  }
}
