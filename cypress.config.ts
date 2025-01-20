const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implémentez les event listeners du node ici
    },
  },
})
