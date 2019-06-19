import template from './movies-filter.html'
import controller from './controller.js'

export default {
  template,
  controller,
  bindings: {
    filters: '<',
    activeFilter: '='
  }
}
