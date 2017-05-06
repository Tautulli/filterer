import React, { Component } from 'react';

import Config from './Config';

class FilterLine extends Component {

  getOperators(list) {
    if(!list) return;
    return list.map((item, index) => {
      return (<option key={index} value={item.name}>{item.name}</option>)
    })
  }

  getCoefficients = (list) => {
    if(!list) return;
    return list.map((item, index) => {
      return (<option key={index} value={item.value}>{item.name}</option>)
    })
  }

  render() {
    return (
      <div className="form-group">
        <div className="col-md-4">
          <select className="form-control input-sm">
            {this.getCoefficients(this.props.coefficients)}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control input-sm">
            {this.getOperators(Config.operators)}
          </select>
        </div>
        <div className="col-md-5">
          <input type="text" className="form-control input-sm" />
        </div>
      </div>
    );
  }
}

export default FilterLine;
