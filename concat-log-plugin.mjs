export default () => ({
  name: 'concat-logger',
  configureWebpack(config, isServer) {
    // runs BEFORE our fix plugin? order = plugins array order. log base state:
    console.log(`[concat-logger] isServer=${isServer} concatenateModules at entry:`, config.optimization && config.optimization.concatenateModules);
    return {
      optimization: { concatenateModules: false },
      mergeStrategy: { 'optimization.concatenateModules': 'replace' },
    };
  },
});
