import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return <MovieCard movie={movie} type="watched" key={movie.id} />
            })}
          </div>
        ) : (
          <h2 className="no-movies">No Movies in your list</h2>
        )}
      </div>
    </div>
  )
}
