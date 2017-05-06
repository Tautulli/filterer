import React, { Component } from 'react';

class FilterLineLabel extends Component {


  render() {
    let addRemoveStyles = {paddingTop: 10, paddingBottom: 10, paddingRight: 3, paddingLeft: 3};

    return (
      <div className="row">
        <div className="col-md-10">
          <label className="control-label">Condition {this.props.index + 1}</label>
          {this.props.index === 0 ? "" : (<select style={{marginLeft: 10}}><option>AND</option><option>OR</option></select>)}
        </div>
        <div className="col-md-2">
          <a className="pull-right" style={addRemoveStyles}><span className="fa fa-lg fa-minus-circle"/></a>
          <a className="pull-right" style={addRemoveStyles}><span className="fa fa-lg fa-plus-circle"/></a>
        </div>
      </div>
    );
  }
}

export default FilterLineLabel;
