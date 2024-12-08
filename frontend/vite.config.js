import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://twitter-clone-1739.onrender.com' || process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    rollupOptions: {
      external: [
        'react-router-dom',
        'react-icons',
        'react-icons/io5',
        'react-icons/md',
        'react-icons/fa'
      ],
      output: {
        globals: {
          'react-router-dom': 'ReactRouterDOM',
          'react-icons': 'ReactIcons',
          'react-icons/io5': 'Io5',
          'react-icons/md': 'Md',
          'react-icons/fa': 'Fa'
        }
      }
    }
  }
})