import iconPath from './iconPath'

const isDevelopment = process.env.NODE_ENV !== 'production'
const url = isDevelopment
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : `file://${__dirname}/index.html`


export default {
  index: url,
  showDockIcon: true,
  icon: iconPath(isDevelopment),
  preloadWindow: true,
  alwaysOnTop: true,
  width: 330,
  height: 280
}
