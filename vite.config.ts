import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';
import { patchCssModules } from 'vite-css-modules'


export default defineConfig({
  plugins: [
    react(),
    patchCssModules()
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    lightningcss: {
      cssModules: {
        pattern: '[name]__[local]___[hash:base64:5]',
        dashedIdents: false
      }
    }
  }
})