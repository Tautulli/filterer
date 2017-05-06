import React, {Component} from 'react';

const addRemoveStyles = {paddingTop: 10, paddingBottom: 10, paddingRight: 3, paddingLeft: 3};

class FilterLineLabel extends Component {

  constructor(props) {
    super(props);

    this.removeCondition = this.removeCondition.bind(this);
    this.addCondition = this.addCondition.bind(this);
  }

  removeCondition() {
    this.props.removeCondition(this.props.index);
  }

  addCondition() {
    this.props.addCondition(this.props.index);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <label className="control-label">Condition &#123;{this.props.index + 1}&#125;</label>
        </div>
        <div className="col-md-2">
          <a className="pull-right" style={addRemoveStyles} onClick={this.removeCondition}>
            <span className="fa fa-lg fa-minus-circle"/>
          </a>
          <a className="pull-right" style={addRemoveStyles} onClick={this.addCondition}>
            <span className="fa fa-lg fa-plus-circle"/>
          </a>
        </div>
      </div>
    );
  }
}

export default FilterLineLabel;
