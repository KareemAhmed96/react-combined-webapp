import React from 'react'


class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
    
    render() {
        return (
            <div>
                <h6>{this.props.task}</h6>
            </div>
        )
    }
}
    
export default TodoItem;