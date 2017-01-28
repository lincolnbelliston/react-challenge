import React, {Component} from 'react';
import MovieContainer from './MovieContainer.jsx';
import Pagination from './Pagination.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <MovieContainer />
        <Pagination />
      </div>
    );
  }
}

export default App;
