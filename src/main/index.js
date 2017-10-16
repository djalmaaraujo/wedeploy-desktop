import { app } from 'electron'
import menubar from 'menubar'
import path from 'path'
import DevUtils from './utils/dev'
import we from './services/wedeploy'
import updateUI from './services/ui'

const isDevelopment = process.env.NODE_ENV !== 'production'
const url = isDevelopment
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : `file://${__dirname}/index.html`

const mb = menubar({
  index: url,
  showDockIcon: true,
  icon: path.join(app.getAppPath(), '/static/IconTemplate.png'),
  alwaysOnTop: true
})

mb.on('after-show', () => DevUtils.init(mb))

// Initial Data
mb.on('show', () => we.fetchProjects().then((projects) => updateUI(mb, projects)))

// Realtime updates
we.watch((projects) => updateUI(mb, projects))