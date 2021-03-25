import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


class TodoApp extends React.Component {
  
  id = 0
  
  constructor() {
    super();
    this.state = {
      items: ["Task_1", "Task_2", "Task_3", "Task_4"]
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Todo App Page</h1>
        <TodoList list={this.state.items}/>
        <TodoForm />
      </div>
    )
  }
}

export default TodoApp;