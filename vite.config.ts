import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/ts/app.ts', // Entry point for your app
      refresh: true, // Auto-refresh the page during development when files change
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null, // Don't transform base URLs
          includeAbsolute: false, // Don't include absolute URLs
        },
      },
    }),
    vueJsx(), // Ensure JSX support if you plan to use JSX syntax in Vue components
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/ts'), // Define alias '@' to resolve to 'resources/ts'
    },
  },
  build: {
    target: 'es2020', // Set the build target to ES2020 for better browser support
  },
});
