import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodos from './components/addTodos';
import { connect } from 'react-redux';

class App extends Component {
  // state = {
  //   todosList:[
  //     {todoContent: "finish this feature", id: 1},
  //     {todoContent: "start the next one", id: 2},
  //   ]
  // }
  
  // generateId  = () => {
  //   const listId = [];
  //   this.props.state.todosList.map(item => listId.push(item.id))
  //   let newId = Math.random();
  //   if (listId.includes(newId)) {
  //   	newId = newId +1
  //   	return newId;
  //   } else {
  //   	return newId;
  //   }
  // }

  // addTodo = (todo) => {
  //   todo.id = this.generateId();
  //   let todos = [...this.props.state.todosList, todo]
  //   this.setState({
  //     todosList: todos
  //   })
  // }

  
  render() {
    return (
      <div>
        <AddTodos /> 
        <h1>Todo's List</h1>
        <TodoList TodoList={this.props.todosList}/>
      </div>
    );
  }
}

// get data from the store
const mapStateToProps = (state) => {
  return {
    todosList: state.todosList
  }
}



export default connect(mapStateToProps)(App);
