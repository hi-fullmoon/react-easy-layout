const serve = require('rollup-plugin-serve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/index.dev.tsx',
  output: {
    file: 'dist/react-easy-layout.js',
    format: 'cjs',
  },
  plugins: [
    typescript({
      compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
    }),
    serve({
      port: 8080,
      contentBase: '',
    }),
  ],
};
