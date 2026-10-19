import { makeSiteConfig, buildOpenApiPlugins } from '@sentin8/site-engine';
import site from './site.json' with { type: 'json' };
import concatLogger from './concat-log-plugin.mjs';
import afterLogger from './after-plugin.mjs';
import webpack from 'webpack';
import fs from 'node:fs';
const statsDumper = () => ({
  name: 'stats-dumper',
  configureWebpack() {
    return {
      plugins: [new webpack.DefinePlugin({})].concat([{
        apply(compiler) {
          compiler.hooks.done.tap('sentin8-stats-dumper', (stats) => {
            const json = stats.toJson({ modules: true, chunkModules: true, nestedModules: true, cachedModules: true, cached: true, source: false, assets: false, chunks: false, reasons: false });
            fs.writeFileSync('/home/hamid/dev/sentin8.new/sentin8/.tmp/stats-full.json', JSON.stringify(json));
            const mods = json.modules || [];
            const hits = mods.filter((m) => /theme-openapi|SchemaTabs/.test(m.name || '') || /theme-openapi|SchemaTabs/.test(m.identifier || ''));
            console.log('[sentin8-dump] modules:', mods.length, '| theme-openapi hits:', hits.length);
            for (const m of hits.slice(0, 30)) {
              console.log('[sentin8-dump]', m.moduleType, '|', (m.name || '').slice(0, 130), '| members:', (m.modules || []).length);
            }
          });
        },
      }]),
    };
  },
});

export default {
  ...makeSiteConfig(site, { devPort: 3037 }),
  plugins: [statsDumper, concatLogger, afterLogger, ...buildOpenApiPlugins(site)],
};
