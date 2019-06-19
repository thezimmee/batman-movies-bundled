import angular from 'angular'
import component from './component.js'

export const MovieModule = angular
  .module('movie', [])
  .component('movieDetail', component)
  .name
