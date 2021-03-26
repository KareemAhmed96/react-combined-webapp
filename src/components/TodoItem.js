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
    
    render() {
        return (
            <div>
                <h6>{this.props.task.text}</h6>
                <button onClick={this.deleteTask}>Delete</button>
            </div>
        )
    }
}
    
export default TodoItem;