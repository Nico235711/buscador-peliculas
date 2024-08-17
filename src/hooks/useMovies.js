import moviesResults from '../data/movies-results.json'

export const useMovies = () => {
  const movies = moviesResults.Search
  const hasMovies = movies?.length > 0

  // no usar los directamente de la api, mapearlos en su lugar por si en un futuro cambia la api
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year
  }))  

  return {
    hasMovies,
    mappedMovies
  }
}
