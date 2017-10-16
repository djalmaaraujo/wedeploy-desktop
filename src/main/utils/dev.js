const isDevelopment = process.env.NODE_ENV !== 'production'

const DevUtils = {
  init(mb) {
    if (!isDevelopment || !mb) return false

    mb.window.on('devtools-opened', () => {
      window.focus()
      setImmediate(() => {
        window.focus()
      })
    })

    mb.window.openDevTools()
  }
}

export default DevUtils