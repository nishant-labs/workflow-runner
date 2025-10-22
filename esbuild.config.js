#!/usr/bin/env node

import process from 'node:process';
import * as esbuild from 'esbuild';
import {glob} from 'glob';

try {
	const entryPoints = await glob('src/**/*.{ts,tsx}', {
		ignore: ['src/**/__tests__/**', 'src/**/*.{test,spec}.{ts,tsx}'],
	});

	console.log('Entry points:', entryPoints);
	const result = await esbuild.build({
		entryPoints,
		outdir: 'dist',
		bundle: false,
		format: 'esm',
		platform: 'node',
		target: 'node20',
		outbase: 'src',
		jsx: 'automatic',
		treeShaking: true,
		tsconfig: 'tsconfig.json',
		loader: {
			'.js': 'js',
			'.ts': 'ts',
			'.tsx': 'tsx',
		},
	});

	if (result.errors.length > 0) {
		console.error('Build failed:', result.errors);
		process.exit(1);
	}

	console.log('Build completed successfully');
} catch (error) {
	console.error('Build failed:', error);
	process.exit(1);
}
