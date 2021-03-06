import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


class TodoApp extends React.Component {
  
  id = 0
  
  constructor() {
    super();
    this.state = {
      items: [
        //dummy task objects
        {
          text: "Task_1",
          done: false,
          id: this.id++
        },
        {
          text: "Task_2",
          done: false,
          id: this.id++
        },
      ]
    }
  }

  componentDidMount() {
    
  }

  addTask = (task) => {

    let newTask = {
      text: task,
      done: false,
      id: this.id++
    }

    this.state.items.push(newTask)
    console.log(this.state.items)
    this.forceUpdate()
  }

  deleteTask = (taskId) => {
    
    let index = this.state.items.findIndex(
      (item) => item.id == taskId
    );
    this.state.items.splice(index, 1)
    this.forceUpdate()

    // this.state.items.map(
    //   (task, index, taskArray) => {
    //     if(taskId == task.id) {
    //       taskArray.splice(taskId, 1)
    //     }
    //   }
    // )
  }

  toggleDone = (itemObj) => {
    itemObj.done = !itemObj.done
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h1>Todo App Page</h1>
        <TodoList list={this.state.items} onDelete={this.deleteTask} onToggleDone={this.toggleDone} />
        <TodoForm onAddTask={this.addTask} />
      </div>
    )
  }
}

export default TodoApp;