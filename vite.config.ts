import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ttd-kata-js/',
  plugins: [react()],
  build: {
    outDir: 'build', // <-- this changes 'dist' to 'build'
  },
})
