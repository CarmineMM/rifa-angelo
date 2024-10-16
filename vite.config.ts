import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: './postcss.config.js',
  },
})
