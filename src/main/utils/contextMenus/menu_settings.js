// Electron
import { shell, app } from 'electron'

// Custom
import We from '../../services/wedeploy'

const getOpenAtLogin = () => app.getLoginItemSettings().openAtLogin

export default [
  {
    label: 'Preferences',
    submenu: [
      {
        label: 'Open at Login',
        type: 'checkbox',
        checked: getOpenAtLogin(),
        click() {
          const openAtLogin = getOpenAtLogin()

          app.setLoginItemSettings({
            openAtLogin: !openAtLogin
          })
        }
      },
      {
        label: 'Allow Notifications'
      }
    ]
  },
  { type: 'separator' },
  {
    label: 'Open Console',
    click() {
      shell.openExternal(We.defaults.urlConsole)
    }
  },
  {
    label: 'Support',
    click() {
      shell.openExternal(We.defaults.urlHelp)
    }
  },
  {
    label: 'Documentation',
    click() {
      shell.openExternal(We.defaults.urlDocs)
    }
  },
  {
    role: 'about'
  },
  { type: 'separator' },
  {
    role: 'quit',
    accelerator: 'Cmd+Q'
  }
]
