import React, {Component} from 'react';
import {Panel, Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap';
import ReviewModal from './ReviewModal.jsx';

var MovieView = React.createClass({

  render: function() {
    var className = "movieView";
    var basePosterURL = "http://image.tmdb.org/t/p/w92/";
    var originalPosterURL = "http://image.tmdb.org/t/p/original";

    return (
      <div className={className}>
        <Grid>
          <Row>
            <Col sm={12}>
              <Panel header={this.props.movie.title} collapsible>
                <Col sm={3}>
                <Thumbnail src={basePosterURL + this.props.movie.poster_path}
                  href={originalPosterURL + this.props.movie.poster_path}
                  alt="Poster not found" />
                </Col>
                <Col sm={9}>
                  <p>Release date: {this.props.movie.release_date}</p>
                  <p>Average Rating: {this.props.movie.vote_average}</p>
                  <p>Overview: {this.props.movie.overview}</p>
                  <ReviewModal movie={this.props.movie} />
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
