import React, { Component } from 'react'

export default class ListForm extends Component {
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
        this.props.addList(this.state);
        this.setState({
            content: ''
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder= "목록"
                onChange={this.handleChange} 
                value={this.state.content}/>
                </form>
            </div>
        )
    }
}
