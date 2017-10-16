const UI = (mb, projects) => {
  if (!mb.window) return false

  mb.window.webContents.send('api:projects', projects)
}

export default UI