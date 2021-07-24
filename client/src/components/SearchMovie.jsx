import React from 'react';
import App from './App.jsx';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMovie: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({searchedMovie: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.searchMovie);
    const movie = this.state.searchedMovie;
    console.log(movie);
    this.props.searchedMovie(movie);

  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <input
          type="text"
          value={this.state.searchedMovie}
          onChange={this.handleChange}
          placeholder="Search.." />
          <input type="submit" value="Go!" />

        </form>

      </div>
    );
  }
}

export default SearchMovie;
