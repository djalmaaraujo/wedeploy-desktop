// Electron
import { Notification, shell } from 'electron'

// Module
import Config from './config'

const HEALTH_STATUS = Config.get('HEALTH_STATUS')
const BAD_TITLE = 'Something is wrong'
const GOOD_TITLE = 'Back online!'

const BAD_BODY = (p) => `Project ${p} is unhealthy. Click for more details`
const GOOD_BODY = 'All projects are healthy again'
const MULTIPLE_BAD_BODY = 'More than one project with unhealthy status. Click for more details'
const URLS = Config.get('URLS')

const overallStatus = (projects) => {
  if (projects.length === 0) return true

  return projects.reduce((acc, p) => {
    if (acc === false || p.health === HEALTH_STATUS.unhealthy) return false

    return true
  }, true)
}

const totalByStatus = (projects, status) => {
  return projects.reduce((acc, p) => {
    if (p.health === status) {
      acc++;
    }

    return acc
  }, 0)
}

const getUniqueByStatus = (projects, status) => projects.find((p) => p.health === status)

const getNotificationParams = (overallStatus, projects) => {
  // All good (healthy)
  if (overallStatus) return [ GOOD_TITLE, GOOD_BODY, false ]

  // Something bad one or more
  const totalUnhealthy = totalByStatus(projects, HEALTH_STATUS.unhealthy)

  // More? Multiple message
  if (totalUnhealthy > 1) return [ BAD_TITLE, MULTIPLE_BAD_BODY, false ]

  // One? Find the one and show in alert
  const unhealthyProject = getUniqueByStatus(projects, HEALTH_STATUS.unhealthy)

  return [BAD_TITLE, BAD_BODY(unhealthyProject.projectId), unhealthyProject.projectId ]
}

const showNotification = (title, body, projectId = false) => {
  const n = new Notification({
    title,
    body
  })

  n.show()

  if (projectId) {
    n.on('click', () => shell.openExternal(URLS.urlProjectLogs.replace(Config.get('PLACEHOLDER_URL', projectId))))
  }
}

export default (pJson) => {
  const currentProjects = Config.get('projectsHistory') || []

  pJson.then((newProjects) => {
    const currentOverallStatus = overallStatus(currentProjects)
    const newOverallStatus = overallStatus(newProjects)
    const showAlert = false

    // Save new history
    Config.set('projectsHistory', newProjects)

    // If everything is the same, don't alert anything
    if (currentOverallStatus === newOverallStatus) return;

    // If continues from here it's because we have a new status in place
    const [alertTitle, alertBody, projectId] = getNotificationParams(newOverallStatus, newProjects)

    console.log('display notification')

    showNotification(alertTitle, alertBody, projectId)
  })
}
