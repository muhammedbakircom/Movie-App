/* eslint-disable no-unused-expressions */
import React from "react";
import {useState} from "react";

function Add() {
    const [query,setQuery] = useState("");
    console.log(query);

  const onChange = (e) => {
    setQuery(e.target.value)
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=d44788546017a8f852ad299cb3990607&
    language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((response) => response.json()
    .then((data) => console.log(data)));
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="title">
            <h1>Hoş Geldiniz</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi Keşfedin
            </h2>
          </div>
          <div className="input-wrapper">
            <input 
            type="text"  
            value={query}
            onChange={onChange}    
            placeholder="Film,dizi ara.." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;