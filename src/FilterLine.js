import React, { Component } from 'react';

import Config from './Config';

class FilterLine extends Component {

  getOperators(list, coefficient) {
    console.log(list, coefficient)
    if(!list) return;
    return list.filter((item) => {
      return item.types.indexOf(coefficient.type) > -1;
    }).map((item, index) => {
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
          <select className="form-control input-sm" value={this.props.condition.coefficient}>
            {this.getCoefficients(this.props.coefficients)}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control input-sm" value={this.props.condition.operator}>
            {this.getOperators(Config.operators, this.props.coefficients.find((item) => item.value === this.props.condition.coefficient))}
          </select>
        </div>
        <div className="col-md-5">
          <input type="text" className="form-control input-sm" value={this.props.condition.value} />
        </div>
      </div>
    );
  }
}

export default FilterLine;
