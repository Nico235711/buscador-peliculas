import { useState } from "react"

export const useSearch = () => {
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearchMovie = (event) => {
    event.preventDefault()
    if (search === "") {
      setError("No se ingreso un título para buscar")
      return
    }
    setError("")
    setLoading(true)
    setTimeout(() => {
      setResponseMovies([]);
      fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`)
        .then(response => response.json())
        .then(data => {
          setResponseMovies(data); // Asegúrate de que sea un array vacío si no hay resultados
          setLoading(false);
          setSearch("")
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false); // Asegúrate de manejar el caso de error también
        });
    }, 3000);
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return {
    search,
    error,
    responseMovies,
    loading,
    handleSearchMovie,
    handleChange
  }
}