import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action/todoAction';
import '../css/componentsStyleSheet/addTodos.css';


// let randomId = require("uuid/v4")


class AddTodos extends Component {

    constructor(props) {
        super(props)
        this.getId = this.getId.bind(this);
    }
    state = {
        todoContent:'',
        description: '',
        creationDate: '',
        img:'',
        id : this.getId
    }


    
    getId = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    formatDate = () => {
        let date = new Date();
	    let currentDate = date.toISOString().slice(0,10);
        let currentTime = date.getHours() + ':' + date.getMinutes()+ ':' +date.getSeconds();
        console.log(currentDate+ " " +currentTime)
	    return currentDate+ " " +currentTime
    }


    handleChange = (e) => {
        this.setState({
            todoContent : e.target.value
        })
        
    }
    handleDescriptionChange= (e) => {
        this.setState({
            description: e.target.value
        })
    }
    
    
    handleSbumit = (e) => {
        e.preventDefault();
        this.setState({
            id: this.getId(),
            
        })

        // // Make sure that we have a new unique id 
        // if (this.state.id === this.getId()){
        //     this.setState({
        //         id: this.getId(),
        //         // creationDate: this.formatDate()
        //     }) 
        // } else {
        //     this.setState({
        //         id: this.getId(),
        //         // creationDate: this.formatDate()
        //     })
        // }
        // this.setState({
        //     creationDate: this.formatDate()
        // })
        // fetch('http://aws.random.cat/meow')
        //     .then(response => response.json())
        //     .then(data => this.setState({img: data.file}))
        //     .catch(err => console.log(err));

        // this.props.addTodo(this.state.todoContent, this.state.description, this.state.creationDate, this.state.img, this.state.id);
        this.props.addTodo(this.state);
        // this.props.addTodo(this.state)

        //reset the input field after submit
        this.setState({
            todoContent:'',
            description: ''
        })
    }
    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={this.handleSbumit}>
                    <label htmlFor="addTodo" className="addTodo" ><h3>Add Todo's:</h3></label>
                    <input type="text" placeholder="enter task"  id="addTodo" className="addTodo-input" onChange={this.handleChange} value={this.state.todoContent}></input>
                      
                    <label htmlFor="addDescription" className="addDescription"><h3>Add Description:</h3></label>
                    <textarea id="addDescription" rows="5" placeholder="enter a description" onChange={this.handleDescriptionChange} value={this.state.description}></textarea>
                    <button className="submit-button">add</button>
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      todosList: state.todosList
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        // addTodo: (todo, description, creationDate, img, id) => { dispatch(addTodo(todo, description, creationDate,img, id)) }
        addTodo: (todo) => { dispatch(addTodo(todo))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddTodos);