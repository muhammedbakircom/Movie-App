import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import MovieCard from './MovieCard';

function Watched() {
  const {watched} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>İzlenecek Filmler</h1>
        <div className='count-pill'>
          {watched.length} {watched.length < 2 ? "Movie" : "Movies"}
        </div>
        </div>
          


          {watched.length > 0 &&(
            <div className='movie-grid'>
              {watched.map((movie,index)=> (
                <MovieCard 
                key={index} 
                movie={movie} 
                type="watched"
                />
              ))}
            </div>
          )  || (
            <h2 className='no-movies'>Listenizde Film Yok...</h2>
          )}
        </div>
      </div>  
  )
}

export default Watched
