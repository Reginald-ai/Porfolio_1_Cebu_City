const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main1: resolve(__dirname, 'about.html'),
        main2: resolve(__dirname, 'region.html'),
    
      }
    }
  }
})