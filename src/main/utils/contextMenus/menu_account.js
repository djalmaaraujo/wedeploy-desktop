// Electron
import { shell, app } from 'electron'

// Custom
import Config from '../../services/config'
import bytesToSize from '../bytesToSize'

const URLS = Config.get('URLS')

export default (menubar, { accountUsage, usageDetails }) => {
  const round = (n) => Math.round(n)
  const regPercent = (n1, n2) => round((n1 / n2) * 100)
  const percent = (where) => `${regPercent(usageDetails[where].value, usageDetails[where].planTotal)}%`

  return [
  {
      label: `Plan Usage ${regPercent(accountUsage.value, accountUsage.planTotal)}% (premium)`,
    click() {
      shell.openExternal(URLS.urlAccountUsage)
    }
  },
  { type: 'separator' },
  {
    enabled: false,
    label: `Projects: ${usageDetails.projects.value} of ${usageDetails.projects.planTotal}`
  },
  {
    enabled: false,
    label: `Collaborators: ${usageDetails.collaborators.value} of ${usageDetails.collaborators.planTotal}`
  },
  {
    enabled: false,
    label: `Instances: ${usageDetails.instances.value} of ${usageDetails.instances.planTotal}`
  },
  {
    enabled: false,
    label: `Custom Domains: ${usageDetails.customDomains.value} of ${usageDetails.customDomains.planTotal}`
  },
  {
    enabled: false,
    label: `Memory: ${bytesToSize(usageDetails.projects.value)} of ${bytesToSize(usageDetails.projects.planTotal)} (${percent('memory')})`
  },
  {
    enabled: false,
    label: `CPU: ${round(usageDetails.cpu.value)} of ${usageDetails.cpu.planTotal} core processors (${percent('cpu')})`
  },
  {
    enabled: false,
    label: `Transfer: ${bytesToSize(usageDetails.traffic.value)} of ${bytesToSize(usageDetails.traffic.planTotal)} (${percent('traffic')})`
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
  }
]}
