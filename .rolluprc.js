// -------------------------------------------------------------------------------------------------
// Imports and setup.
//

import configGen from '@brikcss/rollup-config-generator'
import { string } from 'rollup-plugin-string'

/**
 * Generate configs with a simple configuration object or array.
 *
 * @param {String} [type=undefined]  Type of config: 'browser'|'node'.
 * @param {String} [target=undefined]  Target environment:
 *     'modern'(browser),'legacy'(browser),'#'(node).
 * @param {String} [id=undefined]  Id/name of module. This determines the file name.
 * @param {Object|Function} [options={}]  Run options. Allowable keys are `${output.format}` or
 *     `${output.format}:${config.target}`. Each value can be an object or function, which gets
 *     merged with each config that matches the given format/target.
 */
export default configGen.create(
  {
    target: 'legacy',
    input: 'src/app.js',
    external: [],
    output: {
      format: 'iife',
      file: 'dist/js/app.js'
    },
    plugins: {
      insert: [string({
        include: '**/*.html',
        exclude: '**/index.html'
      })]
    }
  },
  {
    iife (output, config) {
      config.external = []
      config.output.file = 'dist/js/app.js'
      return config.output
    }
  }
)
