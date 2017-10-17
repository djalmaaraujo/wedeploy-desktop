import { app } from 'electron'
import menubar from 'menubar'
import path from 'path'
import DevUtils from './utils/dev'
import we from './services/wedeploy'
import updateUI from './services/ui'
import menubarOptions from './utils/menubarOptions'

const mb = menubar(menubarOptions)

mb
  .on('show', () => DevUtils.init(mb))
  .on('after-show', () => we.fetchProjects().then((projects) => updateUI(mb, projects)))

// Realtime updates
we.watch((projects) => updateUI(mb, projects))
