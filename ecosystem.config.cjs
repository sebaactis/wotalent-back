module.exports = {
    apps: [{
      name: "cowotalent",
      script: "./index.js",
      watch: true,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: "production"
      },
      
  }]
  };