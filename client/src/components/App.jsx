import React, { useState } from 'react';
import AddMovie from './Add/AddMovie.jsx';
import SearchMovie from './Search/SearchMovie.jsx';
import MovieList from './List/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      searchedMovies: []
    };

    this.searchedMovie = this.searchedMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleMovie = this.toggleMovie.bind(this);
  }

  // movies : movies:{
  //   {title: 'Mean Girls',
  //   }
  // }

  componentDidMount() {
    this.setState({movieList: [
      {
        title: 'Mean Girls',
        watched: true
      },
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
    ]})
  }

  searchedMovie(movie) {
    // console.log(movie)
    var movies = this.state.movieList;
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title === movie) {

        var addMovie = movies[i];
        // console.log("movie: ", addMovie);

        this.setState({searchedMovies: [addMovie, ...this.state.searchedMovies]})
      }
    }
  }

  addMovie(movie) {
    this.setState({movieList: [movie, ...this.state.movieList]})
  }

  toggleMovie(movie) {
    // console.log(movie);
    this.setState({movieList: []})
  }

  render() {
    return (
      <div>
        <div>
          <h1>Movie List</h1>
        </div>

        <AddMovie
        addMovie={this.addMovie}
        />

        <SearchMovie
        searchedMovie={this.searchedMovie}
        />

        <MovieList
        movies={this.state.searchedMovies}
        />

      </div>
    );
  }

}

export default App;
