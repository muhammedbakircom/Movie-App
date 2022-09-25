import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import MovieCard from './MovieCard';

function Watched() {
  const {watched} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <div className='heading'>
        <h1>İzlenecek Filmler</h1>
          </div>
          {watched.length > 0 &&(
            <div className='movie-grid'>
              {watched.map((movie,index)=> (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watched
