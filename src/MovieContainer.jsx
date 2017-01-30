import React, {Component} from 'react';
import MovieView from './MovieView.jsx';
import {PanelGroup} from 'react-bootstrap';

var MovieContainer = React.createClass({
  render: function() {
    var movieViews = [];
    var movies = this.props.movies;
    var page = this.props.page;
    for (var i=0; i < 20; i++) {
      var index = 20 * parseInt(page - 1) + parseInt(i);
      if(!movies[index]){
        break;
      }
      movieViews.push(
        <MovieView movie={movies[index]} id={movies[index].id} key={index} />
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
