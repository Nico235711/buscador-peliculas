import { MovieDetails } from './components/MovieDetails'
import { useMovies } from './hooks/useMovies'
import { Error } from './components/Error'
import { useSearch } from './hooks/useSearch'
import { Spinner } from './components/Spinner'

function App() {

  const { search, error, responseMovies, loading, handleSearchMovie, handleChange } = useSearch()
  const { hasMovies, mappedMovies } = useMovies(responseMovies)
  const gridStyle = hasMovies && !loading ? "grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5" : ""

  return (
    <>
      <header className="flex justify-center items-center flex-col">
        <h1>Buscador de Peliculas</h1>

        <form
          className="flex justify-center items-center"
          onSubmit={handleSearchMovie}
        >
          <input
            type="text"
            placeholder="Avengers, Star Wars, Matrix..."
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
        {
          error && <Error>{error}</Error>
        }
      </header>

      <main className={`my-5 ${gridStyle}`}>
        {
          loading ? (
            <Spinner />
          ) : (
            <>
              {
                hasMovies && mappedMovies?.length > 0 ? (
                  <>
                    {
                      mappedMovies?.map(movie => (
                        movie.poster !== "N/A" && <MovieDetails key={movie.id} movie={movie} />
                      ))
                    }
                  </>
                ) : !loading && (
                  <p className='text-center text-lg'>No se encotraron resultados</p>
                )
              }
            </>
          )
        }
      </main>
    </>
  )
}

export default App
