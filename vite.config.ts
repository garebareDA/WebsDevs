import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './app',
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
  alias: {
    "~/": "../../app/"
  },
});