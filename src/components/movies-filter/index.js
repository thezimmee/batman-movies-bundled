import angular from 'angular'
import component from './component.js'
import filter from './filter.js'

export const MoviesFilterModule = angular
  .module('movies.filter', [])
  .component('moviesFilter', component)
  .filter('byDecade', filter)
  .name
