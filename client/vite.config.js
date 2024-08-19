import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: '/login', // This will open the /login path when running `npm run dev`
  },
});
