// Electron
import { shell, app } from 'electron'

// Custom
import Config from '../../services/config'
import bytesToSize from '../bytesToSize'

const URLS = Config.get('URLS')

export default (menubar, projectId) => {
  const replaceURLWithProjectID = (url) => url.replace(Config.get('PLACEHOLDER_URL'), projectId)

  return [
    {
      label: 'Install Service',
      click() {
        shell.openExternal(replaceURLWithProjectID(URLS.urlProjectInstallService))
      }
    },
    {
      label: 'Manage Collaborators',
      click() {
        shell.openExternal(replaceURLWithProjectID(URLS.urlProjectCollaborators))
      }
    },
    { type: 'separator' },
    {
      label: 'Go to Project Settings',
      click() {
        shell.openExternal(replaceURLWithProjectID(URLS.urlProjectSettings))
      }
    }
  ]
}
