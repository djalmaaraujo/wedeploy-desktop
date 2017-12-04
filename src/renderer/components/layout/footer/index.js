// Modules
import React from 'react'

// Components
import AccountIcon from '../accountIcon'
import Pill from '../../pill'

// Style
import './index.css'

/**
 * Health status values.
 */
const HEALTH_STATUS = {
  unhealthy: 'unhealthy',
  none: 'none',
  healthy: 'healthy',
};


export default class Footer extends React.Component {
  getStatus(projects) {
    if (!projects) return null;

    // true = up and running
    // false = something is wrong
    // we ignore 'none'
    return projects.reduce((acc, p) => {
      if (acc === HEALTH_STATUS.unhealthy || p.health === HEALTH_STATUS.unhealthy) return HEALTH_STATUS.unhealthy

      return HEALTH_STATUS.healthy
    }, HEALTH_STATUS.healthy)
  }

  getStatusText(status) {
    if (status === HEALTH_STATUS.unhealthy) return 'Something is wrong'
    if (status === HEALTH_STATUS.healthy) return 'All services online'

    return 'Connecting...'
  }

  render() {
    const status = this.getStatus(this.props.projects)
    const statusText = this.getStatusText(status)

    return (
      <footer className="footer">
        <div className="footer__column footer__column--status"><Pill name={status} zoom={true} />{statusText}</div>
        <div className="footer__column footer__column--account">
          <AccountIcon
            accountUsage={this.props.accountUsage}
            usageDetails={this.props.usageDetails}
            user={this.props.user}
          />
        </div>
      </footer>
    )
  }
}
