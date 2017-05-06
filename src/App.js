import React, { Component } from 'react';
import './App.css';

import FilterLine from './FilterLine';
import FilterLineLabel from './FilterLineLabel';

class App extends Component {

  render() {

    let renderConditions = (conditions) => {
      if(!conditions) return;
      return conditions.map((item, index) => {
        return (
          <div key={index}>
            <FilterLineLabel index={index} />
            <FilterLine coefficients={this.props.config.coefficients} condition={item} />
          </div>
        );
      })
    }

    return (
      <div className="form-horizontal">{renderConditions(this.props.config.conditions)}</div>
    );
  }
}

export default App;
