import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeMovieToWatchlist, addMovieToWatched , moveToWatchlist , removeMovieWatched} =
    useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

{type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye-slash" onClick={() => moveToWatchlist(movie)}></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieToWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

    </div>
  );
}

export default MovieControls;
