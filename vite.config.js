import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths so the site works at the root of a domain and under a sub-path such as /site-stwl/
  base: './',
  plugins: [react()],
})
