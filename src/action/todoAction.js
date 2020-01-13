export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}

// export const addTodo = (todo, description, creationDate,img, id) => {
//     return {
//         type: 'ADD_TODO',
//         payload: {
//             todoContent: todo,
//             description: description,
//             creationDate: creationDate,
//             img: img,
//             id: id
//         } 
//     }
// } 


const creatDate = () => {
    let date = new Date();
    let currentDate = date.toISOString().slice(0,10);
    let currentTime = date.getHours() + ':' + date.getMinutes()+ ':' +date.getSeconds();
    console.log(currentDate+ " " +currentTime)
    return currentDate+ " " +currentTime
}



export const addTodo = (todo) => {
    return (dispatch) => {
        fetch('http://aws.random.cat/meow')
            .then(response => response.json())
            .then(data=> (
                dispatch(
                    {
                        type: 'ADD_TODO',
                        payload: {
                            todoContent: todo.todoContent,
                            description: todo.description,
                            creationDate: creatDate(),
                            img: data.file,
                            id: todo.id
                        }
                    }
                )
            ))
            .catch(err => {dispatch({type: 'ADD_TODO_ERROR', err})
        });
    }
}

