import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import process from 'node:process';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(process.cwd(), 'src/index.ts'),
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
