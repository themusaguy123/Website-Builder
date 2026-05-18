import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dmvappliance.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
