import { app } from 'electron'
import menubar from 'menubar'
import DevUtils from './utils/dev'
import we from './services/wedeploy'
import updateUI from './services/ui'
import menubarOptions from './utils/menubarOptions'

const mb = menubar(menubarOptions)

mb.on('show', () => DevUtils.init(mb))

// Realtime updates
we.watch((projects) => updateUI(mb, projects))
