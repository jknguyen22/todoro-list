import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component{

  render(){
    //for each todo we iterate through, what do we want to return
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}

export default Todos;