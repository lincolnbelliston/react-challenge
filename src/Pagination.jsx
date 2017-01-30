import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import App from './App.jsx';
var moviedb = require('./moviedb');

var PaginationModule = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });

    ReactDOM.render(<App movies={this.props.movies} page={eventKey}/>, document.getElementById('react-root'));
    window.scrollTo(0,0);
  },


  render: function() {
    var className = "pagination";

    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.props.totalPages}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect}
       />
    );
  },


  componentWillReceiveProps: function(nextProps){
    this.setState({
      activePage: nextProps.page
    })
  }

});

export default PaginationModule;
