module.exports = {
    apps: [{
      name: "WO-Talent",
      script: "index.js",
      autorestart: true,
      watch: true,
      instances: 4,
      ignore_watch: "",
      instance_var: "0",
  }]
  };