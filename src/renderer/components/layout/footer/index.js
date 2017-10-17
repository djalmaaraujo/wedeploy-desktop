import React from 'react'

import AccountIcon from '../accountIcon'

export default class Footer extends React.Component {
  render() {
    let statusText = '(*) All services up and running'

    if (this.props.status && this.props.status !== 'up')
      statusText = '(x) Something is wrong'

    return (
      <footer>
        <hr />

        <div className="footer__status">{ statusText }</div>
        <div className="footer__accountIcon"><AccountIcon /></div>
      </footer>
    )
  }
}
