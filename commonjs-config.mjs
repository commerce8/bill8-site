import { makeSiteConfig, buildOpenApiPlugins } from '@sentin8/site-engine';
import site from './site.json' with { type: 'json' };

// Force deterministic CommonJS parsing for the openapi theme's compiled lib files.
const forceCommonJs = () => ({
  name: 'sentin8-openapi-commonjs-force',
  configureWebpack(config, isServer) {
    return {
      module: {
        rules: [
          {
            test: /docusaurus-theme-openapi-docs[/\\]lib[/\\]theme[/\\].*\.js$/,
            type: 'javascript/commonjs',
          },
        ],
      },
    };
  },
});

export default {
  ...makeSiteConfig(site, { devPort: 3037 }),
  plugins: [...buildOpenApiPlugins(site), forceCommonJs],
};
