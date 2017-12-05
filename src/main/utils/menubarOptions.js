import iconPath from './iconPath'
import Config from '../services/config'

const isDevelopment = process.env.NODE_ENV !== 'production'
const url = isDevelopment
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : `file://${__dirname}/index.html`


export default {
  index: url,
  showDockIcon: true,
  icon: iconPath(isDevelopment),
  preloadWindow: true,
  // alwaysOnTop: Config.get('alwaysOnTop'),
  alwaysOnTop: true,
  width: 380,
  height: 343
}
