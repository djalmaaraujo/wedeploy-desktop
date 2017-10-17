// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'
import Project from '../project'

export default class Main extends React.Component {
  render() {
    const renderProject = (item, k) => {
      return <Project data={item} key={k} />
    }

    if (!this.props.state.projects) {
      return (
        <div className="container">
          <p>Loading your projects...</p>
        </div>
      )
    }

    return (
      <div className="container">
        { this.props.state.projects.map(renderProject) }
      </div>
    )
  }

  componentDidMount() {
    ipcRenderer.send('api:projects')
  }
}
