import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './app',
  build: {
    outDir: '../dist',
  },
  optimizeDeps: {
    exclude: ["@remix-run/netlify", "@remix-run/react", "@remix-run/dev"],
  },
  plugins: [react()],
  alias: {
    "~/": "../../app/"
  },
});