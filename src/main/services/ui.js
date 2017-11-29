const UI = (mb, projects) => {
  if (!mb.window) return false

  mb.window.webContents.send('api:data', projects)
}

export default UI
