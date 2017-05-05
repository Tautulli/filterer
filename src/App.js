import React, { Component } from 'react';
import './App.css';

import FilterLine from './FilterLine';

class App extends Component {
  render() {
    return (
      <div className="form-horizontal">
        <FilterLine isFirst={true} />
        <FilterLine />
        <FilterLine />
        <FilterLine />
      </div>
    );
  }
}

export default App;
