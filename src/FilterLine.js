import React, {Component} from 'react';

class FilterLine extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let condition = this.props.condition;
    condition[event.target.name] = event.target.value

    this.props.onChange({
      index: this.props.index,
      value: condition
    });
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
        <div className="col-sm-4">
          <select className="form-control input-sm"
                  name="coefficient"
                  value={this.props.condition.coefficient}
                  onChange={this.handleInputChange}>
            <option disabled selected value="">Parameter</option>
            {this.getCoefficients(this.props.coefficients)}
          </select>
        </div>
        <div className="col-sm-3">
          <select className="form-control input-sm"
                  name="operator"
                  value={this.props.condition.operator}
                  onChange={this.handleInputChange}>
            <option disabled selected value="">Operator</option>
            {this.getOperators(this.props.operators, this.props.coefficients.find((item) => item.value === this.props.condition.coefficient))}
          </select>
        </div>
        <div className="col-sm-5">
          <input type="text"
                 name="value"
                 className="form-control input-sm"
                 value={this.props.condition.value}
                 onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
}

export default FilterLine;
