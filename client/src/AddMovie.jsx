import React from 'react';
import App from './App.jsx';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.addMovie);
    const movie = this.state;
    // console.log(movie);
    this.props.addMovie(movie);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="text"
          value={this.state.addMovie}
          onChange={this.handleChange}
          placeholder="Add movie title here"
          />

          <input type="submit" value="Add" />

        </form>

      </div>
    );
  }
}

export default AddMovie;