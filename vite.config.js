import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set base to './' so the built site works when served from any path
  // (gh-pages, sub-folder hosting, opening dist/index.html locally).
  base: './',
  build: {
    outDir: 'dist',
  },
});
