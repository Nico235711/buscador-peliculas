import moviesResults from '../data/moviesResults.json'
import moviesNoResults from '../data/noResults.json'

export const useMovies = (responseMovies) => {  

  const movies = responseMovies?.Search
  
  const hasMovies = movies?.length > 0

  // no usar los directamente de la api, mapearlos en su lugar por si en un futuro cambia la api
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type
  }))

  return {
    hasMovies,
    mappedMovies
  }
}
