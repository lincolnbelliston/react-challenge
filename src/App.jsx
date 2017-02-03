import React, {Component} from 'react';
import MovieContainer from './MovieContainer.jsx';
import PaginationModule from './Pagination.jsx';
import FilterNavbar from './FilterNavbar.jsx';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
var moviedb = require('./moviedb');

var movies;

var App = React.createClass({
  getInitialState() {
    return {
      movies: this.props.movies,
      totalPages: this.props.totalPages
    }
  },

  render: function(){
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader>Now Playing <small>(built w/ React)</small></PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <FilterNavbar movies={this.state.movies} totalPages={this.state.totalPages}/>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>click on a title for details</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <MovieContainer movies={this.state.movies} page={this.props.page} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='text-center'>
            <PaginationModule movies={this.state.movies} totalPages={this.state.totalPages} page={this.props.page} />
          </Col>
        </Row>
      </Grid>
    );
  },

  getMovies(page, callback) {
    var getMovies = this.getMovies;
    var totalPages = this.state.totalPages;
    var setState = this.setState;

    page = page + 1
    if (page <= totalPages){
      moviedb.page = page;
      moviedb.request(function(nextPage){
        movies = movies.concat(nextPage.results);
        if (page == totalPages){
          callback();
        }
        getMovies(page, callback);
      });
    }
  },

  updateState() {
    this.setState({
      movies: movies
    })
  },

  componentDidMount() {
    movies = this.state.movies;
    var totalPages = this.state.totalPages;

    /* after first page of movies renders, get the rest of the movies.
    // I understand this isn't really scalable, but I thought the feature of
    // being able to sort the movies alphabetically would be nice, and the only
    // way I could see to do that was to download every page of movies.
    // In any case, it goes on in the background so it won't detract from UX.
    */
    this.getMovies(1, this.updateState);

  }
})

export default App;
