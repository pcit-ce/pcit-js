import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import tweakDefault from './build/rollup-plugin.js';

let production = (process.env.target || 'min') === 'min';

function getConfig(target = 'min') {
  let config = {
    min: {
      output: {
        file: 'dist/pcit.min.js',
        name: 'PCIT',
        format: 'umd',
        exports: 'named',
      },
    },
    umd: {
      output: {
        file: 'dist/pcit.js',
        name: 'PCIT',
        format: 'umd',
        exports: 'named',
        // sourcemap: 'inline',
      },
    },
    cjs: {
      output: {
        file: 'dist/pcit.common.js',
        format: 'cjs',
        exports: 'named',
        // sourcemap: 'inline',
      },
    },
    esm: {
      output: {
        file: 'dist/pcit.esm.js',
        format: 'esm',
        // sourcemap: 'inline',
      },
    },
  };

  return config[target];
}

let config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/pcit.min.js',
    name: 'PCIT',
    format: 'iife', // amd, cjs, esm, iife, umd
  },
  plugins: [
    tweakDefault(),
    typescript(),
    production && terser(),
    nodeResolve({
      mainFields: ['module', 'main'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};

let { output } = getConfig(process.env.target);

config.output = output;

export default config;
