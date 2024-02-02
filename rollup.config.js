import resolve from '@rollup/plugin-node-resolve';

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'index.js',
	output: {
		file: 'bundle.rollup.js',
		format: 'esm',
	},
	plugins: [
		resolve(),
	],
};