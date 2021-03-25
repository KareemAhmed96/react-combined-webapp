import React from 'react'
import TodoItem from './TodoItem'


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
    
    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                    {this.props.list.map(
                        (ele, index) => (
                            <li key={index} ><TodoItem task={ele} /></li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}
    
export default TodoList;