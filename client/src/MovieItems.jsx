import React from 'react';
import App from './App.jsx';


class MovieItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({watched: true, name: 'watched'});
    alert('I watched this movie: ' + this.state.watched);

  }


    render() {
      return (
        <div>
              <span>{this.props.movie.title}</span>
              <button onClick={this.handleSubmit}>{this.state.name}</button>

        </div>
      );
    }

}

export default MovieItems;