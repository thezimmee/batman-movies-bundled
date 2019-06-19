import angular from 'angular'
import component from './component.js'

export const MoviesListModule = angular
  .module('movies.list', [])
  .component('moviesList', component)
  .name
