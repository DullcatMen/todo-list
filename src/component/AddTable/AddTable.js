import React, { Component } from 'react';
import './AddTable.css';

class AddTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }

  handleCancel(state) {
    this.props.onChangeHide(state);
  }

  handleConfirm(value) {
    if (value == '') {
      alert('内容不能为空！');
      return;
    }

    this.props.addData(value);

    this.handleCancel(false);
  }

  handleInputChange(e) {
    this.setState({
      val: e.target.value
    });
  }

  render() {
    return (
      <div id="add-table">
        <div className="add-box">
          <input type="text" placeholder="..." onChange={this.handleInputChange.bind(this)} />
          <div className="btn-box">
            <div className="btn" onClick={this.handleCancel.bind(this, false)}>CANCEL</div>
            <div className="btn" onClick={this.handleConfirm.bind(this, this.state.val)}>OK</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTable;