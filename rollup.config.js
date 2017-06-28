var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

export default {
  entry: 'src/main.js',
  format: 'cjs',
  dest: 'index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
};
