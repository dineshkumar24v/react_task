import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react_cards_task/', // This must match your repo name
  plugins: [react()],
})
