import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@/core': path.resolve(__dirname, './src/core/'),
      '@/ui': path.resolve(__dirname, './src/ui/')
    }
  }
})
