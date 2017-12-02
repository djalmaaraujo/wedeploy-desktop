const Store = require('electron-store')
const store = new Store()

const HEALTH_STATUS = {
  unhealthy: 'unhealthy',
  none: 'none',
  healthy: 'healthy',
}

const URLS = {
  url: 'https://www.wedeploy.com',
  urlHelp: 'https://help.wedeploy.com/',
  urlConsole: 'https://console.wedeploy.com',
  urlDocs: 'https://wedeploy.com/docs/',
  urlAccountUsage: 'https://console.wedeploy.com/account/usage',
  urlProfile: 'https://console.wedeploy.com/account/profile',
  urlBilling: 'https://console.wedeploy.com/account/billing',
}

const SETTINGS = {
  appName: "Wedeploy Desktop",
  allowNotifications: true,
  HEALTH_STATUS,
  URLS
}

class Settings {
  constructor(database) {
    this.database = database
  }

  get(setting) {
    if (store.has(setting)) {
      return store.get(setting)
    } else {
      if (this.database.hasOwnProperty(setting) === true) {
        return this.database[setting]
      }

      return null
    }
  }

  set(setting, value) {
    store.set(setting, value)
  }

  all() {
    return store.store
  }

  has(setting) {
    return store.has(setting)
  }

  delete(setting) {
    return store.delete(setting)
  }

  clear() {
    return store.clear()
  }
}

module.exports = new Settings(SETTINGS)
