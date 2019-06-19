import angular from 'angular'
import { MoviesListModule } from './components/movies-list'
import { MoviesFilterModule } from './components/movies-filter'
import { MovieModule } from './components/movie'

angular
  .module('dgMovieApp', [
    MoviesListModule,
    MoviesFilterModule,
    MovieModule
  ])
