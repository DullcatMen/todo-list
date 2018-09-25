import React from 'react'
import Tasks from './Tasks';
import {Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <div id="header">
          <h1>TODO LIST</h1>
          <button type="button" className="btn-all"><Link to="/list">ALL</Link></button>
          <div className="btn-add"><Link to="/add">ADD</Link></div>
        </div>
        <Tasks />
        {this.props.children}
      </div>
    );
  }
}

export default App;