const Store = require('electron-store');
const store = new Store();

const HEALTH_STATUS = {
  unhealthy: 'unhealthy',
  none: 'none',
  healthy: 'healthy',
};

const NOTIFICATION_TYPES = {};

const SETTINGS = {
  appName: "Wedeploy Desktop",
  HEALTH_STATUS: HEALTH_STATUS,
  allowNotifications: true
};

class Settings {
  constructor(database) {
    this.database = database;
  }

  get(setting) {
    if (this.database.hasOwnProperty(setting) === true) {
      return this.database[setting];
    } else {
      return store.get(setting);
    }
  }

  set(setting, value) {
    if (this.database.hasOwnProperty(setting) === true) {
      this.database[setting] = value;
    } else {
      store.set(setting, value);
    }
  }

  all() {
    return store.store;
  }

  has(setting) {
    return store.has(setting);
  }

  delete(setting) {
    return store.delete(setting);
  }

  clear() {
    return store.clear();
  }
}

module.exports = new Settings(SETTINGS);
