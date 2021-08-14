const withSass = require('@zeit/next-sass')

// Extend your Next config for advanced behavior
// See https://nextjs.org/docs/api-reference/next.config.js/introduction
let nextConfig = {
  future: {
    webpack5: true
  }
}

// Add the Next SASS plugin
nextConfig = withSass(nextConfig)

module.exports = nextConfig
