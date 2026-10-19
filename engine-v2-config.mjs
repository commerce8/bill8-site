// Harness: use the CURRENT engine sources directly (pre-release verification).
import { makeSiteConfig, buildOpenApiPlugins } from '/home/hamid/dev/sentin8.new/sentin8/sentin8-site-engine/src/index.mjs';
import site from './site.json' with { type: 'json' };

const base = makeSiteConfig(site, { devPort: 3037 });
// Route API doc pages through @theme/ApiItem so the redux store Provider wraps them.
base.presets[0][1].docs.docItemComponent = '@theme/ApiItem';
const interopFix = base.plugins.find((p) => !Array.isArray(p));

export default {
  ...base,
  plugins: [...buildOpenApiPlugins(site), interopFix],
};
