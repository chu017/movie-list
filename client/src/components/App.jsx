import React from 'react';
import MovieHeader from './MovieHeader.jsx';
import AddMovie from './AddMovie.jsx';
import SearchMovie from './SearchMovie.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovies: []

    };

    this.searchedMovie = this.searchedMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.watchedMovie = this.watchedMovie.bind(this);
    this.movieToWatch = this.movieToWatch.bind(this);
  }

  // movies : movies:{
  //   {title: 'Mean Girls',
  //   }
  // }

  componentDidMount() {
    this.setState({movies: [
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
    var movies = this.state.movies;
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title === movie) {

        var addMovie = movies[i];
        // console.log("movie: ", addMovie);

        this.setState({searchedMovies: [addMovie, ...this.state.searchedMovies]})
      }
    }
  }

  addMovie(movie) {
    // console.log(movie);
    this.setState({movies: [movie, ...this.state.movies]})
  }

  watchedMovie(movie) {
    // console.log(movie);
    this.setState({movies: []})
  }

  movieToWatch(movie) {

  }


  render() {
    return (
      <div>

        <MovieHeader />
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
