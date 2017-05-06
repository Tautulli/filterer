import React, { Component } from 'react';

class FilterLineLabel extends Component {


  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <label className="control-label">Condition 2 </label>
          {this.props.isFirst ? "" : (<select style={{marginLeft: 10}}>
            <option>AND</option>
            <option>OR</option>
          </select>)}
        </div>
        <div className="col-md-2">
          <a className="pull-right" style={{paddingTop: 10, paddingBottom: 10, paddingRight: 3, paddingLeft: 3}}><span className="fa fa-lg fa-minus-circle"></span></a>
          <a className="pull-right" style={{paddingTop: 10, paddingBottom: 10, paddingRight: 3, paddingLeft: 3}}><span className="fa fa-lg fa-plus-circle"></span></a>
        </div>
      </div>
    );
  }
}

export default FilterLineLabel;
