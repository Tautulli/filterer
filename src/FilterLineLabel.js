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
      <div className={this.props.classes.filterLineLabelRow}>
        <div className={this.props.classes.filterLineLabelCondition}>
          <label style={{marginTop: 0}}>Condition &#123;{this.props.index + 1}&#125;</h5>
        </div>
        <div className={this.props.classes.filterLineLabelControls}>
          <a style={addRemoveStyles} onClick={this.addCondition}>
            <span className={this.props.classes.plusIcon}/>
          </a>
          <a style={addRemoveStyles} onClick={this.removeCondition}>
            <span className={this.props.classes.minusIcon}/>
          </a>

        </div>
      </div>
    );
  }
}

export default FilterLineLabel;
