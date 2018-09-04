import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd(state) {
    this.props.onChangeHide(state);
  }

  render() {
    return (
      <div id="add-button" onClick={this.handleAdd.bind(this, true)}>ADD</div>
    );
  }
}

export default AddButton;