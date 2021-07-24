import React from 'react';
import App from '../App.jsx';
import MovieItems from './MovieItems.jsx';


const MovieList = function (props) {
  return (
    <div>

      <button>watched</button>
      <button>to watch</button>

      <ul className="movies">

        {props.movies.map((movie, i) =>
          <MovieItems movie={movie} key={i}/>
        )}

      </ul>
    </div>
  );
}


export default MovieList;