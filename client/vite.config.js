import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: "@",
      replacement: path.resolve(new URL('.', import.meta.url).pathname, 'src')
    }]
  }
});
