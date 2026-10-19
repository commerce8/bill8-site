import fs from 'node:fs';
export default () => ({
  name: 'stats-dumper',
  configureWebpack(config, isServer) {
    return config; // noop
  },
});
