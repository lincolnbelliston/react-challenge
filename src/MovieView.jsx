import React, {Component} from 'react';
import {Panel, Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';

var MovieView = React.createClass({
  getInitialState: function(){
    return {
      open: false
    }
  },

  componentWillReceiveProps: function(){
    this.setState({
      open: false
    })
  },

  render: function() {
    var className = "movieView";
    var basePosterURL = "http://image.tmdb.org/t/p/w92/";
    var originalPosterURL = "http://image.tmdb.org/t/p/original";

    return (
      <div className={className}>
        <Grid>
          <Row>
            <Col sm={12}>
              <Panel header={this.props.movie.title}
                onClick={ () => this.setState({
                    open: !this.state.open
                  })
                }
                collapsible expanded={this.state.open}>
                <Col sm={3}>
                <Thumbnail src={basePosterURL + this.props.movie.poster_path}
                  href={originalPosterURL + this.props.movie.poster_path}
                  alt="Poster not found" />
                </Col>
                <Col sm={9}>
                  <p>Release date: {this.props.movie.release_date}</p>
                  <p>Average Rating: {this.props.movie.vote_average}</p>
                  <p>Overview: {this.props.movie.overview}</p>
                </Col>
              </Panel>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
});

export default MovieView;
