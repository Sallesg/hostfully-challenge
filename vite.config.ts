/// <reference types="vitest" />
/// <reference types="vite/client"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  root: 'src',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@views': path.resolve(__dirname, 'src', 'views'),
    },
  },
  build: {
    outDir: '../dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../.test/setup.js'],
    include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    reporters: ['verbose', 'basic'],
    outputFile: '../.test/test-output.json',
    coverage: {
      reporter: ['json', 'html'],
      reportsDirectory: '../.test/tests/unit/coverage',
    },
  },
});
