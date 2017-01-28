// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// initial http request to moviedb
var moviedb = require('./moviedb');
moviedb.request(function(movieData){
  ReactDOM.render(<App movieData={JSON.parse(movieData)} />, document.getElementById('react-root'));
});
