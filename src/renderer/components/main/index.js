// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'
import ProjectList from '../projects/projectList'
import Header from '../layout/header'
import Footer from '../layout/footer'

export default class Main extends React.Component {
  render() {
    return (
      <div>
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
