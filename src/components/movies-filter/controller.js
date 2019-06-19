export default function MoviesFilterController () {
  var ctrl = this

  ctrl.updateActiveFilter = function (filter) {
    // Toggle off if already active. Otherwise activate it.
    if (filter.active) {
      filter.active = false
      ctrl.activeFilter = null
    } else {
      if (ctrl.activeFilter) ctrl.activeFilter.active = false
      ctrl.activeFilter = filter
      filter.active = true
    }
  }
}
