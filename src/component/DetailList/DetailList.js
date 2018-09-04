import React, { Component } from 'react';
import './DetailList.css';

class DetailList extends Component {
  constructor(props) {
    super(props);
  }

  handleBack(state) {
    this.props.detailListControl(state);
  }

  render() {
    const listItems = this.props.listItems.map((item) => {
      if (item.isHide) {
        return (<li className="over" key={item.id}>{item.value}</li>);
      } else {
        return (<li key={item.id}>{item.value}</li>);
      }
    });

    return (
      <div id="detail-list">
        <div className="btn-back" onClick={this.handleBack.bind(this, false)} >BACK</div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default DetailList;