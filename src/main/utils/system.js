import { ipcMain, shell } from 'electron'
import { log } from 'util';

const System = {
  init(mb) {
    this.listenOpenURL(mb)
  },

  listenOpenURL(mb) {
    ipcMain.on('sys:openURL', (evt, url) => {
      shell.openExternal(url)
    })
  }
}

export default System
