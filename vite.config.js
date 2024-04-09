import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve'
        ? 'global'
        : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
      })],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
