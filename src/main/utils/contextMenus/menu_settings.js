// Electron
import { shell, app } from 'electron'

// Custom
import We from '../../services/wedeploy'
import Config from '../../services/config'

const getOpenAtLogin = () => app.getLoginItemSettings().openAtLogin

export default (menubar) => [
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
        label: 'Allow Notifications',
        type: 'checkbox',
        checked: Config.get('allowNotifications'),
        click() {
          const allowNotifications = Config.get('allowNotifications')

          Config.set('allowNotifications', !allowNotifications)
        }
      },
      {
        label: 'Always on Top',
        type: 'checkbox',
        checked: Config.get('alwaysOnTop'),
        click() {
          const alwaysOnTop = Config.get('alwaysOnTop')
          const newStatus = !alwaysOnTop;

          menubar.setOption('alwaysOnTop', newStatus)
          Config.set('alwaysOnTop', newStatus)
        }
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
