// Electron
import { ipcMain, shell, Menu } from 'electron'

// Modules
import menuSettings from '../utils/contextMenus/menu_settings'
import menuAccount from '../utils/contextMenus/menu_account'
import menuProject from '../utils/contextMenus/menu_project'
import Config from './config'

// All System Events Available
const OPEN_URL_EVENTS = {
  openURL: 'sys:openURL',
  openConsoleURL: 'sys:openConsoleURL'
}

const CONTEXT_MENUS_EVENTS = {
  'sys:toggleSettings': menuSettings,
  'sys:openAccountUsageContextMenu': menuAccount,
  'sys:openProjectContextMenu': menuProject
};

const openURL = (url) => shell.openExternal(url)

// Send Data to UI
// This is the state of the UI, with all API information the app need
export const UpdateUI = (mb, projects) => {
  if (!mb.window) return false

  mb.window.webContents.send('api:data', projects)
}

// UI Events Listener
// UI sends events using ipcRender and main proccess listen here
export const Events = {
  init(mb) {
    this.listenOpenURL()
    this.listenOpenConsoleURL()
    this.bindContextMenuListeners(mb)
  },

  bindContextMenuListeners(mb) {
    for (const eventName in CONTEXT_MENUS_EVENTS) {
      ipcMain.on(eventName, (evt, data) => {
        const menu = Menu.buildFromTemplate(CONTEXT_MENUS_EVENTS[eventName](mb, data))

        menu.popup(mb.window)
      })
    }
  },

  listenOpenURL() {
    ipcMain.on(OPEN_URL_EVENTS.openURL, (evt, url) => openURL(url))
  },

  listenOpenConsoleURL() {
    ipcMain.on(OPEN_URL_EVENTS.openConsoleURL, (evt, url) => openURL(Config.get('URLS').urlConsole))
  }
}

export default Events
