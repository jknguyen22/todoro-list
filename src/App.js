import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'walk the dogs',
        completed: false
      },
      {
        id: 2,
        title: 'buy eggs',
        completed: false
      },
      {
        id: 3,
        title: 'lunch with mom',
        completed: false
      }
    ]
  }
  render(){
    console.log(this.state.todos)
    return(
      <div className="App">
        <Todos todos={ this.state.todos }/>
      </div>
    );
  }
}

export default App;

