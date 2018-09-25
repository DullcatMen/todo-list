import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Data from './Data';

class Add extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.context.router;

    this.state = {
      textValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(event) {
    this.setState({
      textValue: event.target.value
    });
  }

  handleSubmit() {
    if (this.state.textValue == '') {
      alert('内容不能为空');
      return;
    }
    Data.add(this.state.textValue);
    this.context.router.history.push('/');
  }

  render() {
    return (
      <div id="add">
        <div className="add-box">
          <input type="text" placeholder="Input Some Task..." onChange={this.handleChange} />
          <div className="btn-box">
            <div className="btn"><Link to="/">CANCEL</Link></div>
            <div className="btn" onClick={this.handleSubmit}>OK</div>
          </div>
        </div>
      </div>
    );
  }
}

Add.contextTypes = {
  router: PropTypes.object
};

export default Add;