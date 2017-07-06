import React, {Component} from 'react';

import {MultiSelect} from 'react-selectize';

class FilterLine extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleInputChange(event) {
    let condition = this.props.condition;
    condition[event.target.name] = event.target.value;
    let selectedParameter = this.props.parameters.find(item => item.value === event.target.value);
    if(selectedParameter) {
      condition.type = selectedParameter.type;
    }

    this.props.onChange({
      index: this.props.index,
      value: condition
    });
  }

  handleValueChange(value) {
    let condition = this.props.condition;
    condition.value = value.map(item => item.value);

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

  getValues(values) {
    if (!values) return [];
    return values.map((item) => {
      return {label: item, value: item}
    })
  };

  labels = []
  render() {
    let param = this.props.parameters.find(item => item.value === this.props.condition.parameter);
    this.props.condition.type = (param ? param.type: null);
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
            <option disabled value="">-- Operator --</option>
            {this.getOperators(this.props.operators, this.props.parameters.find((item) => item.value === this.props.condition.parameter))}
          </select>
        </div>
        <div className={this.props.classes.filterLineValue}>
          <MultiSelect style={{width: "100%"}}
                       placeholder="-- Value --"
                       theme="bootstrap3"
                       values={this.getValues(this.props.condition.value)}
                       onValuesChange={this.handleValueChange}
                       uid={item => item.value}
                       restoreOnBackspace={item => item.label.toString()}
                       createFromSearch={(options, values, search) => {
                         this.labels = values.map(value => value.label);
                         if (search.trim().length === 0 || this.labels.indexOf(search.trim()) !== -1)
                           return null;
                         return {label: search.trim(), value: search.trim()};
                       }}
                       renderNoResultsFound={(values, search) => {
                         return <div className="no-results-found">
                           {(() => {
                             if (search.trim().length === 0)
                               return "Enter a new value";
                             else if (values.map(item => item.label).indexOf(search.trim()) !== -1)
                               return "Value already exists";
                           })()}
                         </div>
                       }}/>
        </div>
      </div>
    );
  }
}

export default FilterLine;
