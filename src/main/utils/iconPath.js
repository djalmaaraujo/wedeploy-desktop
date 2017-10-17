export default (isDevelopment) => {
  return (isDevelopment) ?
    './static/IconTemplate.png'
      : path.join(app.getAppPath(), '/static/IconTemplate.png')
}
