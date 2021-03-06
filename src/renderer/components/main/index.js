// Electron
import { ipcRenderer } from 'electron'

// Render
import React from 'react'
import ProjectList from '../projects/projectList'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Login from '../../components/login'
import Offline from '../../components/offline'

import './font.css'
import './index.css'

export default class Main extends React.Component {
  render() {
    if (!this.props.state) return null
    if (this.props.state.offline) return <Offline message={this.props.state.offlineMessage} />
    if (!this.props.state.loggedIn) return <Login />

    const {projects, user, accountUsage, usageDetails} = this.props.state

    return (
      <div className="main">
        <Header />
        <ProjectList projects={projects} />
        <Footer
          projects={projects}
          user={user}
          accountUsage={accountUsage}
          usageDetails={usageDetails}
        />
      </div>
    )
  }

  componentDidMount() {
    setInterval(() => {
      ipcRenderer.send('api:data')
    }, 3000);
  }
}
