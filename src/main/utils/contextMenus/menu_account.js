// Electron
import { shell, app } from 'electron'

// Custom
import Config from '../../services/config'

const URLS = Config.get('URLS')

export default (menubar) => [
  {
    label: 'Plan Usage 60% (premium)',
    click() {
      shell.openExternal(URLS.urlAccountUsage)
    }
  },
  { type: 'separator' },
  {
    enabled: false,
    label: 'Projects: 4 of 20'
  },
  {
    enabled: false,
    label: 'Instances: 6 of 20'
  },
  {
    enabled: false,
    label: 'Memory: 2.6 GB of 10 GB (26%)'
  },
  {
    enabled: false,
    label: 'CPU: 2 of 8 core processors (28%)'
  },
  {
    enabled: false,
    label: 'Transfer: 0 Bytes of 120 GB (0%)'
  },
  { type: 'separator' },
  {
    label: 'View Profile',
    click() {
      shell.openExternal(URLS.urlProfile)
    }
  },
  {
    label: 'Billing & Plan',
    click() {
      shell.openExternal(URLS.urlBilling)
    }
  },
  { type: 'separator' },
  {
    label: 'Log Out'
  }
]
