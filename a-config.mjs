import { makeSiteConfig, buildOpenApiPlugins } from '@sentin8/site-engine';
import site from './site.json' with { type: 'json' };

const base = makeSiteConfig(site, { devPort: 3037 });
const direct = () => ({
  name: 'sentin8-concat-fix-direct',
  configureWebpack(_config, _isServer, _utils) {
    return { optimization: { concatenateModules: false } };
  },
});

export default {
  ...base,
  plugins: [
    ...buildOpenApiPlugins(site),
    direct,
  ],
};
