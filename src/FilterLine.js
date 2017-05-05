import React, { Component } from 'react';

class FilterLine extends Component {

  render() {
    let operators = [
      "==",
      "!=",
      "<=",
      ">=",
      ">",
      "<",
      "in"
    ]
    let getOptions = (list) => {
      if(!list) return;
      return list.map((item, index) => {
        return (<option key={index} value={item}>{item}</option>)
      })
    }

    return (
      <div className="form-group">
        <div className="col-md-1">
          {this.props.isFirst ? "" : (<select className="form-control">
            <option value="and">and</option>
            <option value="or">or</option>
          </select>)}
        </div>
        <div className="col-md-3">
          <select className="form-control">
            {getOptions(this.props.coefficients)}
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-control">
            {getOptions(operators)}
          </select>
        </div>
        <div className="col-md-4">
          <input className="form-control" />
        </div>
        <div className="col-md-2">
          <div className="btn-group">
            <a className="btn btn-default"><span className="glyphicon glyphicon-plus"></span></a>
            <a className="btn btn-default"><span className="glyphicon glyphicon-minus"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterLine;
