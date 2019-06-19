export default function moviesFilter () {
  return function (movies, years) {
    if (!years) return movies
    return movies.filter(function (movie) {
      return (typeof years.min !== 'number' || movie.Year >= years.min) && (typeof years.max !== 'number' || movie.Year <= years.max)
    })
  }
}
