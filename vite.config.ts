import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {liveDesigner} from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
      plugins: [
        {
          name: 'PrimeVueTemp',
          key: 'primevuetemp',
          pluginPath: fileURLToPath(
            new URL('./primevue/web-types.json', import.meta.url)
          ),
        },
      ],
    }),
    vue(),
    // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ['./src/components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/.vue$/, /.vue?vue/, /.md$/],

      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
