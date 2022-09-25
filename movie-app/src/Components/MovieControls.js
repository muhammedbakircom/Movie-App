import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function MovieControls({movie}) {
  const {removeMovieToWatchlist , addMovieToWatched} = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
        <button className='ctrl-btn' onClick={() => addMovieToWatched(movie) }>
            <i className='fa-fw far fa-eye'></i>
        </button>
        <button className='ctrl-btn' onClick={() => removeMovieToWatchlist(movie.id)}>
            <i className='fa-fw fa fa-times'></i>
        </button>
      
    </div>
  )
}

export default MovieControls
