import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 80,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 80,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 80,
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 80,
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    lossless: true,
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
};


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
      ViteImageOptimizer(DEFAULT_OPTIONS)],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});


