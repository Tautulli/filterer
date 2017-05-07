import React, {Component} from 'react';

import FilterLine from './FilterLine';
import FilterLineLabel from './FilterLineLabel';

class Filterer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conditions: {...props.config.conditions}
    };

    this.updateCondition = this.updateCondition.bind(this);
    this.addCondition = this.addCondition.bind(this);
    this.removeCondition = this.removeCondition.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  updateCondition(event) {
    let arr = {...this.state.conditions};
    arr[event.index] = event.value;

    this.setState({
      conditions: arr
    });
  }

  addCondition(index) {
    let arr = {...this.state.conditions};
    arr.splice(index + 1, 0, {coefficient: "", operator: "", value: ""});

    this.setState({
      conditions: arr
    });
  }

  removeCondition(index) {
    if(this.state.conditions.length > 1) {
      let arr = {...this.state.conditions};
      arr.splice(index, 1);

      this.setState({
        conditions: arr
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.config.updateConditions(this.state.conditions);
    }
  }

  render() {
    let conditions = this.state.conditions.map((item, index) => {
      return (<div key={index}>
        <FilterLineLabel index={index}
                         classes={this.props.config.classes}
                         addCondition={this.addCondition}
                         removeCondition={this.removeCondition}/>
        <FilterLine coefficients={this.props.config.parameters}
                    operators={this.props.config.operators}
                    condition={item}
                    index={index}
                    classes={this.props.config.classes}
                    onChange={this.updateCondition}/>
      </div>)
    });
    return (
      <div className="form-horizontal">{conditions}</div>
    );
  }
}

export default Filterer;
