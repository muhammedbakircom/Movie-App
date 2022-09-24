import React from "react";

function ResultCart({ result }) {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
          alt={`${result.poster_path}`}
        />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{result.title}</h3>
          <h4 className="release-date">
            {(result.release_date && result.release_date.substring(0, 4)) ||
              "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{result.vote_average ? result.vote_average : "-"} </b>
          </h4>
        </div>
        <div className="controls">
          <button className="btn">Add to watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
