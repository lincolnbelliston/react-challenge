import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import App from './App.jsx';

var FilterNavbar = React.createClass({

  handleSort(eventKey){
    var movies = this.props.movies;

    switch(eventKey){
      case 1.1:
        movies = movies.sort(function(a,b){
          var titleA = a.title.toUpperCase(); // ignore upper and lowercase
          var titleB = b.title.toUpperCase(); // ignore upper and lowercase
          if (titleA < titleB) {
            return -1;
          }
            if (titleA > titleB) {
              return 1;
            }

            // names must be equal
            return 0;
        });
        break;
      case 1.2:
        movies = movies.sort(function(a,b){
          var dateA = a.release_date.toUpperCase(); // ignore upper and lowercase
          var dateB = b.release_date.toUpperCase(); // ignore upper and lowercase
          if (dateA < dateB) {
            return 1;
          }
            if (dateA > dateB) {
              return -1;
            }

            // names must be equal
            return 0;
        });
        break;
      case 1.3:
        movies = movies.sort(function(a,b){
          return b.vote_average - a.vote_average;
        })
        break;
    }
    ReactDOM.render(<App movies={movies} page={1} totalPages={this.props.totalPages}/>, document.getElementById('react-root'));

  },


  render: function(){
    return (
      <Navbar>
        <Nav>
          <NavDropdown onSelect={this.handleSort} eventKey={1} title="Sort by" id="sort-by-dropdown">
            <MenuItem eventKey={1.1}>Title</MenuItem>
            <MenuItem eventKey={1.2}>Release date</MenuItem>
            <MenuItem eventKey={1.3}>Average rating</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});

export default FilterNavbar;
