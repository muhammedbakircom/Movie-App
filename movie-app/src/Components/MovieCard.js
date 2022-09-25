import React from 'react'
import MovieControls from './MovieControls'

function MovieCard({movie}) {
  return (
    <div className='movie-card'>
    <div className='overalay'></div>
    {movie.poster_path && (
    <img 
    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
    alt={`${movie.poster_path}`}
    />
    ) || (
        <div className='fiiller-poster'></div>
    )}
    <MovieControls movie={movie}/> 
    </div>
  )
}

export default MovieCard
