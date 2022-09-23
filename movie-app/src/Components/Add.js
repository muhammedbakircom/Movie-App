/* eslint-disable no-unused-expressions */
import React from "react";
import { useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=d44788546017a8f852ad299cb3990607&
    language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(
      (response) =>
        response.json().then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        })
    );
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="title">
            <h1>Hoş Geldiniz !!!</h1>
            <h2>
              Milyonlarca film ve TV şovu. Şimdi Keşfedin !
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Film,dizi ara.."
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((result, index) => (
                <li key={index}>
                  <ResultCart result={result} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
