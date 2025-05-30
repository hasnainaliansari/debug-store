import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
 plugins: [react()],
 base: '/debug-store', // <-- Use your repo name here
})
