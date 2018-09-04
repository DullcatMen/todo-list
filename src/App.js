import React, { Component } from 'react';
import './App.css';
import AddButton from './component/AddButon/AddButton';
import TodoList from './component/TodoList/TodoList';
import AddTable from './component/AddTable/AddTable';
import DetailList from './component/DetailList/DetailList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddTableShow: false,
      isDetailListShow: false,
      data: []
    };

    this.onChangeHide = this.onChangeHide.bind(this);
    this.addData = this.addData.bind(this);
    this.changeDataState = this.changeDataState.bind(this);
  }

  onChangeHide(state) { //addTable
    this.setState({
      isAddTableShow: state
    });
  }

  detailListControl(state) { //detailList
    this.setState({
      isDetailListShow: state
    });
  }

  addData(value) {
    let data = this.state.data;
    let len = data.length;
    let newItem = {
      id: len,
      isHide: false,
      value: value
    };
    
    data.push(newItem);

    this.setState({
      data: data
    });
  }

  changeDataState(id) {
    //console.log(id);

    let data = this.state.data;

    data.forEach((item) => {
      if (item.id === id) {
        item.isHide = true;
      }
    });

    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="App">
        <div id="header">
          TODO LIST
          <div className="btn-all" onClick={this.detailListControl.bind(this, true)}>ALL</div>
        </div>

        <AddButton onChangeHide={this.onChangeHide} />

        <TodoList 
          listItems={this.state.data} 
          changeDataState={this.changeDataState}
        />

        {this.state.isAddTableShow && 
          <AddTable 
            onChangeHide={this.onChangeHide}
            addData={this.addData}
        />}

        {this.state.isDetailListShow && 
          <DetailList 
            listItems={this.state.data} 
            detailListControl={this.detailListControl.bind(this)}
        />}
      </div>
    );
  }
}

export default App;
