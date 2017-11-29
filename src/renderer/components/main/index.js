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
    return (
      <div className="main">
        <Header />
        <ProjectList projects={ this.props.state.projects } />
        <Footer status={'down'} />
      </div>
    )
  }

  componentDidMount() {
    ipcRenderer.send('api:projects')
  }
}
