import React, { Component } from 'react'
import ToDoList from '/Users/daniel/Desktop/todolist/src/components/ToDoList.js'
import '/Users/daniel/Desktop/todolist/src/components/App.css'
import TodoForm from '/Users/daniel/Desktop/todolist/src/components/TodoForm.js'
import ListForm from '/Users/daniel/Desktop/todolist/src/components/ListForm.js'


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [],
      lists: [],
      isToggleOn: true,
      checked: true
    }
  }

  handleCheck = function() {
    this.setState({
      checked: !this.state.checked
    });
  }

  deleteTodo = (id) => {
    const todositems = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todositems
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todotitems = [...this.state.todos, todo];
    this.setState({
      todos: todotitems
    })
  }

  deleteList = (id) => {
    const listitems = this.state.lists.filter(list => {
      return list.id !== id
    });
    this.setState({
      lists: listitems
    })
  }
  addList = (list) => {
    list.id = Math.random();
    let listitems = [...this.state.lists, list]
    this.setState({
      lists: listitems
    })
  }
  // addList = (todo) => {
  //   todo.id = Math.random();
  //   let listitems = [...this.]
  // }

  changeList = (listid) => {
    console.log(listid)
  }
  

  
  render() {
    return (
      <div className="App">
          <h1 className="center-text">Todolist</h1> 
          <ListForm addList={this.addList}/>
          <TodoForm addTodo={this.addTodo}/>
          <ToDoList todos={this.state.todos}
          lists={this.state.lists}
          deleteList={this.deleteList} 
          deleteTodo={this.deleteTodo}
          changeList={this.changeList}
          
          />
         
     </div>
    )
  }
}
