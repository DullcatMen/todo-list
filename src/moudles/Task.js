import React from 'react'
import Data from './Data';
import PropTypes from 'prop-types';

class Task extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.context.router;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let id = event.target.parentNode.id;
    if(window.confirm('确认完成任务?')) {
      Data.finish(id);
      this.context.router.history.push('/');
    }
  }

  render() {
    return (
      <div className="task" id={this.props.id}>
        <button type="button" className="btn-finish" onClick={this.handleSubmit}>FINISH</button>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

Task.contextTypes = {
  router: PropTypes.object
};

export default Task;