import React, { Component } from 'react';
import './App.css';

import FilterLine from './FilterLine';

class App extends Component {

  constructor(){
    super();
    this.state = {

    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="form-horizontal">
        <FilterLine isFirst={true} coefficients={this.props.config.coefficients} />
        <FilterLine coefficients={this.props.config.coefficients} />
        <FilterLine coefficients={this.props.config.coefficients} />
        <FilterLine coefficients={this.props.config.coefficients} />
      </div>
    );
  }
}

export default App;
