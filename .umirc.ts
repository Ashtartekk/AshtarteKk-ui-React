import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base: any = '/AshtarteKk-ui-React';
let publicPath: any = '/AshtarteKk-ui-React/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Alone UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  base,
  publicPath,
});
