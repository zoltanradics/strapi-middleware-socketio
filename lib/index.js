const socketIO = require('socket.io')

module.exports = (strapi) => {
  const middlewareName = 'socketio'
  const middlewareInitialisedLog = `${middlewareName} middleware has been initialised.`

  return {
    initialize() {
      // Get Strapi level middleware settings
      let io
      const strapiMiddlewareSettings = strapi.config.middleware.settings
      const { debug, settings } = strapiMiddlewareSettings[middlewareName]

      if (
        typeof settings === 'undefined' &&
        typeof settings.dsn === 'undefined'
      ) {
        strapi.log.error(settingErrorLog)
      } else {
        // Initialise Sentry SDK
        io = socketIO(strapi.server, settings)

        // IF debug mode is on, let the user know if middleware was initialized
        if (debug) {
          strapi.log.info(middlewareInitialisedLog)
        }
      }

      // Apply Socker IO on Strapi instnace
      strapi.io = io
    },
  }
}
