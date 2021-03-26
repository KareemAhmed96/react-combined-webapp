import React from 'react'


class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    deleteTask = (e) => {
        this.props.onDelete(this.props.task.id)
    }

    toggleDone = () => {
        this.props.onToggleDone(this.props.task)
    }
    
    render() {
        let backgroundColor = this.props.task.done ? "green" : "red"
        return (
            <div>
                <h6 style={{backgroundColor:backgroundColor}}>{this.props.task.text}</h6>
                <button onClick={this.toggleDone} >Check/Uncheck</button>
                <button onClick={this.deleteTask} >Delete</button>
            </div>
        )
    }
}
    
export default TodoItem;