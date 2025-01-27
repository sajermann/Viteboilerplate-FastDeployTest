/// <reference types="vitest" />
/// <reference types="vite/client" />

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5000,
	},
	preview: {
		port: 8080,
	},
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
});
