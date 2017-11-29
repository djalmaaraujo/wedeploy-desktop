import { app } from 'electron'
import menubar from 'menubar'
import DevUtils from './utils/dev'
import we from './services/wedeploy'
import updateUI from './services/ui'
import menubarOptions from './utils/menubarOptions'
import System from './utils/system'

const mb = menubar(menubarOptions)

mb.on('show', () => DevUtils.init(mb))

// Realtime updates
we.watch((data) => updateUI(mb, data))

// Other Modules
System.init(mb)
