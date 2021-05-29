import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteRsw from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    viteRsw({
      mode: 'dev',
      crates: ['@rsw/xi'],
    }),
  ],
});
