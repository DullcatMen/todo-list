import React from 'react'
import Task from './Task';
import Data from './Data';

class Tasks extends React.Component {
  render() {
    const tasks = Data.data.map((item) => {
      if (!item.isDone) {
        return (<Task key={item.id} id={item.id} value={item.value} />);
      }
    });

    return (
      <div id="tasks">{tasks}</div>
    );
  }
}

export default Tasks;