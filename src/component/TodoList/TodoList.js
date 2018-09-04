import React, { Component } from 'react';
import './TodoList.css'



class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleFinish = this.handleFinish.bind(this);
  }

  handleFinish(id) {
    if(window.confirm('确认完成任务?')) {
      this.props.changeDataState(id);
    }
  }

  render() {
    return (
      <div className="todo-list-item">
        <button className="btn-finish" onClick={this.handleFinish}>FINISH</button>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.listItems.map((item) => {
      if (!item.isHide) {
        return (<ListItem 
                  value={item.value} 
                  key={item.id} 
                  changeDataState={this.props.changeDataState.bind(this, item.id)}
                />);
      }
    });

    return (
      <div id="todo-list">{listItems}</div>
    );
  }
}

export default TodoList;