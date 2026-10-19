import { makeSiteConfig, buildOpenApiPlugins } from '@sentin8/site-engine';
import site from './site.json' with { type: 'json' };

const concatOff = () => ({
  name: 'concat-off-used-off',
  configureWebpack() {
    return {
      optimization: {
        concatenateModules: false,
        usedExports: false,
        providedExports: false,
        mangleExports: false,
      },
    };
  },
});

export default {
  ...makeSiteConfig(site, { devPort: 3037 }),
  plugins: [...buildOpenApiPlugins(site), concatOff],
};
