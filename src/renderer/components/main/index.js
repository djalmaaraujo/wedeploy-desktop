// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'
import ProjectList from '../projects/projectList'
import Header from '../layout/header'
import Footer from '../layout/footer'

import './font.css'
import './index.css'

export default class Main extends React.Component {
  render() {
    const {projects, user} = this.props.state

    return (
      <div className="main">
        <Header />
        <ProjectList projects={projects} />
        <Footer projects={projects} user={user} />
      </div>
    )
  }

  componentDidMount() {
    ipcRenderer.send('api:data')
  }
}
