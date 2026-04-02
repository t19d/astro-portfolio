import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
      }
    }
  }
});