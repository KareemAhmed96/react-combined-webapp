import React from 'react'


class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          text: ""
        }
    }

    textChanged = (e) => {
        this.setState({text: e.target.value})
    }

    addText = () => {
        this.props.onAddTask(this.state.text)
        this.setState({text: ""}) //clear the text input
        this.forceUpdate()
    }
    
    render() {
        return (
            <div>
                <h3>Todo Form</h3>
                
                <input type="text" placeholder="Task name" value={this.state.text} onChange={this.textChanged} />
                <button onClick={this.addText}>Add</button>
            </div>
        )
    }
}
    
export default TodoForm;