import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser'; // Import terser for minification

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs', // Output to a directory for CommonJS
      format: 'cjs',
      exports: 'named',
      preserveModules: true, // This is the key change
      sourcemap: true,
    },
    {
      dir: 'dist/esm', // Output to a directory for ES Modules
      format: 'esm',
      preserveModules: true, // This is the key change
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    typescript({
      rootDir: 'src',
      declaration: false,
      declarationMap: false,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
    terser(), // Optional: add minification
  ],
};