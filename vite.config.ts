import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [/^node:.*/, /^@?[\w-]+\/.*/],
    },
    target: 'node20',
    sourcemap: true,
    outDir: 'dist',
  },
});
