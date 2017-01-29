import React, {Component} from 'react';
import MovieView from './MovieView.jsx';
import {PanelGroup} from 'react-bootstrap';

var MovieContainer = React.createClass({
  render: function() {
    var movieViews = [];
    var movies = this.props.movieData.results;
    for (var i=0; i < movies.length; i++) {
      movieViews.push(
        <MovieView movie={movies[i]} id={movies[i].id} key={i} />
      )
    }

    return (
      <div>
        <div className="movieContainer">{movieViews}</div>

      </div>
    );
  }

});



export default MovieContainer;
