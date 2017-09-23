/* register babel core */
require('babel-core/register')({
  ignore: /node_modules/,
  plugins: ['transform-es2015-modules-umd']
})
