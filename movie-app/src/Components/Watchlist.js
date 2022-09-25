import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import MovieCard from './MovieCard';

function Watchlist() {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <div className='heading'>
        <h1>İzlenecek Filmler</h1>
          </div>
          {watchlist.length > 0 &&(
            <div className='movie-grid'>
              {watchlist.map((movie,index)=> (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watchlist
