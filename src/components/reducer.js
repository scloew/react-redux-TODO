//todo need to name this better
//should file structure be modified?

//nice resource
//https://redux.js.org/style-guide/style-guide/

//todo raname better
export default function updateLists(state, action) {
  if (state === undefined) {
    state = {
      todo: [],
      completed: []
    }
  }
  if (action.type === 'addTodo') {
    //add to state.todo
    return state.todo.concat(action.Task);
  }
  else if (action.type === 'markComplete') {
    //remove from todo and add to complete
    return {
      completed: state.completed.concat(
        state.todo.find((item) => {
          return item === action.Task.id
          //TODO, do I need the task id?
          //Shouldn't object reference cover this?
        })
      ),
      todo: state.todo.filter((item) => {
        return item !== action.Task
      })
    }
  }
  else if (action.type === 'delete') {
    //delete the todo; removing from state.todo
    return state.todo.filter((item) => {
      return item !== action.Task
    })
  }
  return state;
}