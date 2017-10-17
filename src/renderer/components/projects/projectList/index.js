// Render
import React from 'react'
import Project from '../project'

export default class ProjectList extends React.Component {
  render() {
    const renderProject = (item, k) => {
      return <Project data={item} key={k} />
    }

    return (
      <div className="container">
        { !this.props.projects && <p>Loading your projects...</p> }
        { this.props.projects && this.props.projects.map(renderProject) }
      </div>
    )
  }
}

