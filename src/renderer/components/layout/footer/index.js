// Modules
import React from 'react'

// Components
import AccountIcon from '../accountIcon'

// Style
import './index.css'

export default class Footer extends React.Component {
  render() {
    let statusText = '(*) All services online'

    if (this.props.status && this.props.status !== 'up')
      statusText = '(x) Something is wrong'

    return (
      <footer className="footer">
        <div className="footer__row">{ statusText }</div>
        <div className="footer__row footer__row--account"><AccountIcon /></div>
      </footer>
    )
  }
}
