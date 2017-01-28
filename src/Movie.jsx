import React, {Component} from 'react';

var Movie = React.createClass({
  render: function() {
    var className = "movie";
    return (
      <div>
        Movie {this.props.index}
      </div>
    );
  }
});

export default Movie;
