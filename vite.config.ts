import react from '@vitejs/plugin-react';
import vitePluginRequire from "vite-plugin-require";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './app',
  build: {
    outDir: '../dist',
  },
  optimizeDeps: {
    exclude: ["./app/entry.client.tsx", "./app/entry.server.tsx", "./app/root.tsx", "@remix-run/netlify", "@remix-run/react", "@remix-run/dev", "remix",],
  },
  plugins: [react(), vitePluginRequire()],
  resolve: {
    alias: {
      "~/": "../../app/"
    },
  }
});