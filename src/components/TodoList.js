import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../action/todoAction';
import '../css/componentsStyleSheet/TodoList.css';
class TodoList extends Component {

    state = {
        showDetails: false,
        isDone: true,
        list:this.props.TodoList
    }
    
    handleClick = (id) => {
        this.props.deleteTodo(id) 
    }
    

    
    componentWillReceiveProps(nextProps)  {
        if(nextProps.TodoList !== this.props.TodoList){
            const sortedTdo =  
                nextProps.TodoList.sort(function (a, b) {
                let key1 = a.creationDate;
                let key2 = b.creationDate;

                if (key1 > key2) {
                    return -1;
                } else if (key1 === key2) {
                    return 0;
                } else {
                    return 1;
                }
            })
            this.setState({ list: sortedTdo });
        }
    }

    handleChange = () => {

        if (this.state.showDetails === false) {
            this.setState({showDetails: true})
        } 
        if (this.state.showDetails === true ) {
            this.setState({showDetails: false})
        }
    }
    
    
    render() {
        // console.log(this.props.TodoList)
        console.log('balabla  ', this.state.list)
        return (
            <div className='todos'>
                {this.state.list.length ? (
                    
                    this.state.list.map(todo => {
                        return (
                            <div className="todo-list" key={todo.id}>
                                <span className="todo-item">
                                    <p className="todo-title" onClick={this.handleChange}>{todo.todoContent}</p>
                                    <button className="delete-button" onClick={()=>this.handleClick(todo.id)}>delete</button>
                                </span>
                                <div className="detaills" style={{display: this.state.showDetails ? ('block') : ('none')  }}>
                                    <h4>Description:</h4>
                                    <p>{todo.description}</p>
                                    <h4>Created:</h4>
                                    <p>{todo.creationDate.toString()}</p>
                                    <img className="todo-img" src={todo.img} alt=""/>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p>There is nothing to do</p>
                )
            }
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
      todosList: state.todosList
    }
  }

// dispatch action from this component
const mapDispatchToProps = (dispatch) => {
    return {
      deleteTodo: (id) => { dispatch(deleteTodo(id)) }
    }
  }

export default connect(mapStateToProps ,mapDispatchToProps)(TodoList);