module.exports = {
    apps: [{
      name: "cowotalent",
      script: "./index.js",
      watch: false,
      instances: 4,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: "production"
      },
      autorestart: true,
  }]
  };