// Modules
import React from 'react'

// Components
import Project from '../project'

// Style
import './index.css'

export default class ProjectList extends React.Component {
  render() {
    const renderProject = (item, k) => {
      return <Project data={item} key={k} />
    }

    return (
      <div className="projectList">
        { !this.props.projects && <p>Loading your projects...</p> }
        { this.props.projects && this.props.projects.map(renderProject) }
      </div>
    )
  }
}

