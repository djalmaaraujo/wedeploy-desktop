// Modules
import React from 'react'

// Components
import Project from '../project'
import Loading from '../../loading'

// Style
import './index.css'

export default class ProjectList extends React.Component {
  render() {
    const renderProject = (item, k) => {
      return <Project data={item} key={k} />
    }

    return (
      <div className="projectList">
        { !this.props.projects && <div className="projectList__loading"><Loading /></div> }
        { this.props.projects && this.props.projects.map(renderProject) }
      </div>
    )
  }
}

