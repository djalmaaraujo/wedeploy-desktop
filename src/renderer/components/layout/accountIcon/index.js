// Modules
import React from 'react'
import md5 from 'md5'

// Style
import './index.css'

export default class AccountIcon extends React.Component {
  getAvatar() {
    if (this.props.user.hasOwnProperty('photoUrl')) return this.props.user.photoUrl

    return `https://www.gravatar.com/avatar/${md5(this.props.user.username)}`
  }
  render() {
    if (!this.props.user) return null

    return (
      <button className="accountIcon" type="button">
        <img className="accountIcon__avatar" src={this.getAvatar()} />
      </button>
    )
  }
}
