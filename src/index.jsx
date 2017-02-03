// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var moviesMaster = [];

// initial http request to moviedb
// (get first page of movies)
var moviedb = require('./moviedb');
moviedb.request(function(movieData){
  var movies = movieData.results;

  // render first page of movies
  ReactDOM.render(<App movies={movies} page={1} totalPages={movieData.total_pages}/>, document.getElementById('react-root'));


});
