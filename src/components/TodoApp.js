import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoWebSql from '../db/TodoWebSql'

let db = TodoWebSql.dbInit()
//TodoWebSql.query(db, "DROP TABLE items")
let queryString = "CREATE TABLE if not exists items (id int primary key, task_text varchar(100), task_status varchar(100))"
TodoWebSql.query(db, queryString)


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
    this.getTasks()
  } 

  getTasks = () => {
    let selectQuery = "SELECT task_text FROM items"
    let result = TodoWebSql.selectQuery(db, selectQuery)
    console.log(result)
  }

  addTask = (task) => {

    let newTask = {
      text: task,
      done: false,
      id: this.id++
    }

    let insertQuery = `INSERT INTO items(id, task_text, task_status) values("${newTask.id}", "${newTask.text}", "${newTask.done}")`
    TodoWebSql.query(db, insertQuery)
    this.getTasks()

    this.state.items.push(newTask)
    console.log(this.state.items)
    this.forceUpdate()
  }

  deleteTask = (taskId) => {

    let deleteQuery = `DELETE FROM items where id=${taskId}`
    TodoWebSql.query(db, deleteQuery)

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