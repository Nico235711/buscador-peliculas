import { useRef } from 'react'
import { MovieDetails } from './components/MovieDetails'
import { useMovies } from './hooks/useMovies'

function App() {
  
  const { hasMovies, mappedMovies } = useMovies()
  const inputRef = useRef()
  const gridStyle = hasMovies ? "grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5" : ""

  const handleSearhMovie = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
  }

  return (
    <>
      <header className="flex justify-center items-center flex-col">
        <h1>Buscador de Peliculas</h1>
        <form
          className="flex justify-center items-center"
          onSubmit={handleSearhMovie}
        >
          <input
            type="text"
            placeholder="Avengers, Star Wars, Matrix..." 
            ref={inputRef}
          />
          <button type="submit">Enviar</button>
        </form>
      </header>

      <main className={`my-5 ${gridStyle}`}>
        {
          hasMovies ? (
            <>
              {
                mappedMovies.map(movie => (
                  <MovieDetails key={movie.id} movie={movie} />
                ))
              }
            </>
          ) : (
            <p className='text-center text-lg'>No se encotraron resultados</p>
          )
        }
      </main>
    </>
  )
}

export default App
