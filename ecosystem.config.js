module.exports = {
  apps: [
    {
      name: 'lcot-hangzhou',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
