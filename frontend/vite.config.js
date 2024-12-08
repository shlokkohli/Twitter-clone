import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://twitter-clone-1739.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'icons-vendor': ['react-icons']
        }
      }
    }
  },
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
      'react-icons': 'react-icons'
    }
  }
})