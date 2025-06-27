import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/react-app/', // ← this is the fix
  plugins: [react()],
});
