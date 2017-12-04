// Electron
import { ipcMain, shell, Menu } from 'electron'

// Modules
import menuSettings from './contextMenus/menu_settings'
import menuAccount from './contextMenus/menu_account'
import menuProject from './contextMenus/menu_project'
import Config from '../services/config'

// All System Events Available
const SYSTEM_EVENTS = {
  toggleSettings: 'sys:toggleSettings',
  openURL: 'sys:openURL',
  openConsoleURL: 'sys:openConsoleURL',
  openAccountUsageContextMenu: 'sys:openAccountUsageContextMenu',
  openProjectContextMenu: 'sys:openProjectContextMenu'
}

const System = {
  init(mb) {
    this.listenOpenURL()
    this.listenOpenConsoleURL()
    this.openAccountUsageContextMenu(mb)
    this.openProjectContextMenu(mb)
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
    ipcMain.on(SYSTEM_EVENTS.openConsoleURL, (evt, url) => shell.openExternal(Config.get('URLS').urlConsole))
  },

  openAccountUsageContextMenu(mb) {
    ipcMain.on(SYSTEM_EVENTS.openAccountUsageContextMenu, (evt, accountUsageData) => {
      const menu = Menu.buildFromTemplate(menuAccount(mb, accountUsageData))

      menu.popup(mb.window)
    })
  },

  openProjectContextMenu(mb) {
    ipcMain.on(SYSTEM_EVENTS.openProjectContextMenu, (evt, projectId) => {
      const menu = Menu.buildFromTemplate(menuProject(mb, projectId))

      menu.popup(mb.window)
    })
  }
}

export default System
