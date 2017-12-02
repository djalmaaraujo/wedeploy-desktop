// Electron
import { shell } from 'electron'

// Custom
import We from '../../services/wedeploy'

export default [
  {
    label: 'Preferences',
    submenu: [
      {
        label: 'Open at Login'
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
    label: 'About',
    role: 'about'
  },
  { type: 'separator' },
  {
    label: 'Quit',
    role: 'quit'
  }
]
