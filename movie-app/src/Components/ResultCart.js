import React from 'react'

function ResultCart({result}) {

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        <img 
        src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`} 
        alt={`${result.poster_path}`}
        />
      </div>
    </div>
  )
}

export default ResultCart
