export default () => ({
  name: 'concat-after-logger',
  configureWebpack(config, isServer) {
    console.log(`[after-logger] isServer=${isServer} concatenateModules AFTER fix merge:`, config.optimization && config.optimization.concatenateModules);
  },
});
