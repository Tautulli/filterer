import React, {Component} from 'react';

import {MultiSelect} from 'react-selectize';

class FilterLine extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let condition = this.props.condition;
    condition[event.target.name] = event.target.value;

    this.props.onChange({
      index: this.props.index,
      value: condition
    });
  }

  handleValueChange(value) {
    let condition = this.props.condition;
    condition.value = value;

    this.props.onChange({
      index: this.props.index,
      value: condition
    });
  }

  getOperators(list, parameter) {
    if (!list || !parameter) return;
    return list.filter((item) => {
      return item.types.indexOf(parameter.type) > -1;
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
    console.log(this.props);
    let labels = []
    return (
      <div className={this.props.classes.filterLineRow}>
        <div className={this.props.classes.filterLineParameter}>
          <select className={this.props.classes.filterLineInput}
                  name="parameter"
                  value={this.props.condition.parameter}
                  onChange={this.handleInputChange}>
            <option value="">-- Parameter --</option>
            {this.getCoefficients(this.props.parameters)}
          </select>
        </div>
        <div className={this.props.classes.filterLineOperator}>
          <select className={this.props.classes.filterLineInput}
                  name="operator"
                  value={this.props.condition.operator}
                  onChange={this.handleInputChange}>
            <option disabled selected value="">-- Operator --</option>
            {this.getOperators(this.props.operators, this.props.parameters.find((item) => item.value === this.props.condition.parameter))}
          </select>
        </div>
        <div className={this.props.classes.filterLineValue}>
          <MultiSelect style={{width: "100%"}}
                       placeholder="-- Value --"
                       theme="bootstrap3"
                       value={this.props.condition.value}
                       onValuesChange={this.handleValueChange}
                       createFromSearch={(options, values, search) => {
                         labels = values.map((value) => { return value.label; })
                         if (search.trim().length === 0 || labels.indexOf(search.trim()) !== -1)
                           return null;
                         return {label: search.trim(), value: search.trim()};
                       }}/>
        </div>
      </div>
    );
  }
}

export default FilterLine;
