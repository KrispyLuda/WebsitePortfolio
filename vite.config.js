// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      // You shouldn't typically need this if postcss.config.js is at root,
      // but it forces the path if there's an unusual setup.
      // Adjust 'path/to/your/postcss.config.js' if it's not at the root
      // or if you named it something else.
      config: './postcss.config.js', // This is often the default, but explicitly setting it can help.
    },
  },
});