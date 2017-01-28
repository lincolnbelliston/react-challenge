import React, {Component} from 'react';
import MovieContainer from './MovieContainer.jsx';
import PaginationModule from './Pagination.jsx';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <PageHeader>Now Playing <small>(built w/ React)</small></PageHeader>
          </Col>

        </Row>
        <Row>
          <Col sm={12}>
            <MovieContainer movieData={this.props.movieData}/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='text-center'>
            <PaginationModule movieData={this.props.movieData}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
