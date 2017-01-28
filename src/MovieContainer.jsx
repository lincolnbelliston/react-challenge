import React, {Component} from 'react';
import Movie from './Movie.jsx';

var MovieContainer = React.createClass({
  render: function() {
    var movies = [];

    for (var i=0; i < 5; i++) {
      movies.push(
        <Movie index={i} key={i} />
      )
    }

    return (
      <div>
        <div className="movies">{movies}</div>
      </div>
    );
  }

});



export default MovieContainer;
