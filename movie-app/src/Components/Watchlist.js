import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import MovieCard from './MovieCard';

function Watchlist() {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>İzlenecek Filmler</h1>
        <div className='count-pill'>
          {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
        </div>
        </div>

          {watchlist.length > 0 &&(
            <div className='movie-grid'>
              {watchlist.map((movie,index)=> (
                <MovieCard 
                key={index} 
                movie={movie} 
                type="watchlist"
                />
              ))}
            </div>
          ) || (
            <h2 className='no-movies'>Listenizde Film Yok...</h2>
          )}
        </div>
      </div>
  )
}

export default Watchlist
