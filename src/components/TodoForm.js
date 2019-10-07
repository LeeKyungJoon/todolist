import React, { Component } from 'react'
import '/Users/daniel/Desktop/todolist/src/components/App.css'

export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    

    render() {
        return (
            <div className='todoinput'>
                <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder= "오늘 할 일"
                onChange={this.handleChange} 
                value={this.state.content}/>
                </form>
            </div>
        )
    }
}

