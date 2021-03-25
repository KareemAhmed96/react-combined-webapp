import React from 'react'


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
          
        }
      }
    
    render() {
        return (
            <div>
                <h3>Todo Form</h3>
                
                <input placeholder="Task name" />
                <button>Add</button>
            </div>
        )
    }
}
    
export default TodoForm;