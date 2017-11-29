import { ipcMain, shell } from 'electron'

const System = {
  init(mb) {
    this.listenOpenURL()
  },

  listenOpenURL() {
    ipcMain.on('sys:openURL', (evt, url) => {
      shell.openExternal(url)
    })
  }
}

export default System
