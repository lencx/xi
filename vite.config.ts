import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import ViteRsw from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    ViteRsw({
      mode: 'dev',
      crates: [
        '@rsw/xi',
      ],
    }),
  ],
});
