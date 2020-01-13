const formatDate = () => {
    let date = new Date();
    let currentDate = date.toISOString().slice(0,10);
    let currentTime = date.getHours() + ':' + date.getMinutes()+ ':' +date.getSeconds();
    console.log(currentDate+ " " +currentTime)
    return currentDate+ " " +currentTime
}

const intState = {
    todosList: [
        {todoContent: "static todo 1", description:"do something", creationDate: formatDate(),img:"", id: 1},
        {todoContent: "static todo 2", description:"do something", creationDate: formatDate(),img:"", id: 2},
    ]
}

const rootReducer = (state= intState, action) => {
    if(action.type === 'DELETE_TODO') {
        // console.log(action);
        let todos = state.todosList.filter(todo => {
            return todo.id !== action.id 
          });
          return {
              ...state,
              todosList: todos
          }
        }
    if (action.type === 'ADD_TODO') {
        console.log(action.payload)
        return {
            ...state,
            todosList: [ ...state.todosList, action.payload],

        }
    }
    if (action.type === 'ADD_TODO') {
        console.log('add todo error', action.err)
        return state;
    }
    // console.log(state)
    return state;
}

export default rootReducer;