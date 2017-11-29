// Modules
import React from 'react'

// Components
import Pill from '../../pill'

// Style
import './index.css'

export default class Project extends React.Component {
  render() {
    const { projectId, health } = this.props.data

    return (
      <div className="project">
        <div className="project__column">
          <div className="project__name">
            <Pill name={health} /> { projectId }
          </div>
        </div>

        <div className="project__column">
          <div className="project__status">
            <span className="project__statusText">{ health }</span>

            <button type="button">...</button>
          </div>
        </div>
      </div>
    );
  }
}
