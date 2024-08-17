
export const MovieDetails = ({ movie }) => {

  return (
    <div className="flex gap-5">
      <img
        src={movie.poster}
        alt={movie.title} 
        className="w-52 h-auto lg:w-28"
      />
      <div>
        <h2 className="text-lg">{movie.title}</h2>
        <span>{movie.year}</span>
      </div>
    </div>
  )
}
