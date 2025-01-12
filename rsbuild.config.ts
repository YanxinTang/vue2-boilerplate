import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue2(),
    pluginVue2Jsx(),
    pluginLess({
      lessLoaderOptions: {
        lessOptions: {
          math: 'always',
          javascriptEnabled: true,
        },
      },
    }),
  ],
  output: {
    assetPrefix: '/vue2-boilerplate/',
  },
  html: {
    title: 'vue2-boilerplate',
  },
});
