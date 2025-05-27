import { build, defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  vite: (env) => ({
    // Force disable HMR for production builds
    server: env.mode === 'production' ? { hmr: false } : {},
  }),
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      name: 'ደባልቅ (Debalq)',
      version: '1.0.2',
      description: 'Amharic Lorem Ipsum generator',
          
    };
  },
});
