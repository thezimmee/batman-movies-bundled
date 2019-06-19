/*! .lintstagedrc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://github.com/okonet/lint-staged) */

module.exports = {
  linters: {
    'dist/css/app.css': [
      'npx postcss dist/css/app.css --replace',
      'git add dist/css/app.css dist/css/app.css.map'
    ],
    'dist/js/app.js': [
      'npx node-minify --compressor uglify-es --input dist/js/app.js --output dist/js/app.js',
      'git add dist/js/app.js'
    ],
    '*.js': ['standard --fix', 'git add'],
    '*.json': ['prettier --parser json --write', 'git add'],
    '*.{yml,yaml}': ['prettier --parser yaml --write', 'git add'],
    '*.md': ['prettier --parser markdown --write', 'git add'],
    '*.html': ['prettier --parser html --write', 'git add']
  },
  concurrent: true,
  globOptions: {
    matchBase: true,
    dot: true
  },
  ignore: ['dist']
}
