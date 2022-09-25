import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Watchlist() {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div>
      {watchlist.map((result)=>(
        <h1>{result.title}</h1>
      ))}
    </div>
  )
}

export default Watchlist
