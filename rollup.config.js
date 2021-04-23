import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/js/bolt.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/js/bolt.mjs.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      eslint({
        fix: true,
      }),
      esbuild({
        minify: process.env.NODE_ENV === 'production',
        sourceMap: true,
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/js/bolt.d.ts',
        format: 'es',
      },
    ],
    plugins: [resolve(), dts()],
  },
];
