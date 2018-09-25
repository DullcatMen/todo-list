import React from 'react';
import {Link} from 'react-router-dom';
import Data from './Data';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isDone) {
      return (<li className="done">{this.props.value}</li>);
    } else {
      return (<li>{this.props.value}</li>);
    }
  }
}

class List extends React.Component {
  render() {
    const listItems = Data.data.map((item) => {
      return (<ListItem key={item.id} isDone={item.isDone} value={item.value} />)
    });

    return (
      <div id="list">
        <div className="btn-back"><Link to="/">BACK</Link></div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default List;