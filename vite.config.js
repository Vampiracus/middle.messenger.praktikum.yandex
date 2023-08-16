import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: { outDir: resolve(__dirname, 'build') },
});
