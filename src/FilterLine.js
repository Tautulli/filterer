import React, {Component} from 'react';

import Config from './Config';

class FilterLine extends Component {

  constructor(props) {
    super(props);
    this.state = props.condition;

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    if (prevState !== this.state) {
      this.props.onChange({
        index: this.props.index,
        value: this.state
      });
    }
  }

  getOperators(list, coefficient) {
    if (!list || !coefficient) return;
    return list.filter((item) => {
      return item.types.indexOf(coefficient.type) > -1;
    }).map((item, index) => {
      return (<option key={index} value={item.name}>{item.name}</option>)
    })
  };

  getCoefficients = (list) => {
    if (!list) return;
    return list.map((item, index) => {
      return (<option key={index} value={item.value}>{item.name}</option>)
    })
  };

  render() {
    return (
      <div className="form-group">
        <div className="col-md-4">
          <select className="form-control input-sm"
                  name="coefficient"
                  value={this.state.coefficient}
                  onChange={this.handleInputChange}>
            {this.getCoefficients(this.props.coefficients)}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control input-sm"
                  name="operator"
                  value={this.state.operator}
                  onChange={this.handleInputChange}>
            {this.getOperators(Config.operators, this.props.coefficients.find((item) => item.value === this.state.coefficient))}
          </select>
        </div>
        <div className="col-md-5">
          <input type="text"
                 name="value"
                 className="form-control input-sm"
                 value={this.state.value}
                 onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
}

export default FilterLine;
