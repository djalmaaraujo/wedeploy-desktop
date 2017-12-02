// Electron
import { ipcMain, shell, Menu } from 'electron'

// Modules
import menuSettings from './contextMenus/menu_settings'
import We from '../services/wedeploy'

// All System Events Available
const SYSTEM_EVENTS = {
  toggleSettings: 'sys:toggleSettings',
  openURL: 'sys:openURL',
  openConsoleURL: 'sys:openConsoleURL',
  openAccountUsageURL: 'sys:openAccountUsageURL'
}

const System = {
  init(mb) {
    this.listenOpenURL()
    this.listenOpenConsoleURL()
    this.listenOpenAccountUsageURL()
    this.listenSettingsMenu(mb)
  },

  listenSettingsMenu(mb) {
    ipcMain.on(SYSTEM_EVENTS.toggleSettings, (evt, url) => {
      const menu = Menu.buildFromTemplate(menuSettings(mb))

      menu.popup(mb.window)
    })
  },

  listenOpenURL() {
    ipcMain.on(SYSTEM_EVENTS.openURL, (evt, url) => shell.openExternal(url))
  },

  listenOpenConsoleURL() {
    ipcMain.on(SYSTEM_EVENTS.openConsoleURL, (evt, url) => shell.openExternal(We.defaults.urlConsole))
  },

  listenOpenAccountUsageURL() {
    ipcMain.on(SYSTEM_EVENTS.openAccountUsageURL, (evt, url) => shell.openExternal(We.defaults.urlAccountUsage))
  }
}

export default System
