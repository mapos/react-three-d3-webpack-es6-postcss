module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}

// postcss-import examples

// can consume `node_modules`, `web_modules` or local modules

// @import "cssrecipes-defaults"; /* == @import "../node_modules/cssrecipes-defaults/index.css"; */
// @import "normalize.css"; /* == @import "../node_modules/normalize.css/normalize.css"; */

// @import "foo.css"; /* relative to css/ according to `from` option above */

// @import "bar.css" (min-width: 25em);
