import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import eslint from 'rollup-plugin-eslint'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/js/bolt.js',
			format: 'cjs',
		},
	],
	plugins: [
		typescript({ useTsconfigDeclarationDir: true }),
		commonjs(),
		resolve(),
	],
}
