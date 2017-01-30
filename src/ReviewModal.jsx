import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
var moviedb = require('./moviedb.js');

var ReviewModal = React.createClass({

  getInitialState() {
    return {
      showModal: false,
      reviews: []
    };
  },

  componentWillMount() {


  },

  updateState(newState){
    this.setState(newState);
  },

  open() {
      this.setState({ showModal: true });

      var baseReviewURL = "https://api.themoviedb.org/3/movie/";
      var suffixURL = "/reviews?api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US&page=1";
      var reviewURL = baseReviewURL + this.props.movie.id + suffixURL;
      var updateState = this.updateState;

      moviedb.request(function(reviewData){updateState({reviews: reviewData.results})},reviewURL)
    },

  close() {
    this.setState({ showModal: false });
  },

  render: function() {
    var reviews = [];
    if(this.state.reviews.length){
      for(var i=0; i<this.state.reviews.length; i++){
        reviews.push(<h4 key={this.state.reviews[i].id}>{this.state.reviews[i].author}</h4>);
        reviews.push(<div key={this.state.reviews[i].id+1}><p>{this.state.reviews[i].content}</p><br/></div>)
      }
    } else {
      reviews = [
        <p key={this.props.movie.id}>No reviews to display.</p>
      ]
    }

    return (
      <div>
        <Button bsStyle="link"
          onClick={ () => this.open() }>Show reviews</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{reviews}</div>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
});

export default ReviewModal;
