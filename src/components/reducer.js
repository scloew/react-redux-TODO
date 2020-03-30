//todo need to name this better
//should file structure be modified?

//nice resource
//https://redux.js.org/style-guide/style-guide/

//todo raname better
export default function myReducer(state, action) {
  if (state === undefined) {
    return {
      todo: [],
      completed: []
    }
  }
  if (action.type === 'addTodo') {
    //add to state.todo
  }
  else if (action.type === 'markComplete') {
    //remove from todo and add to complete
  }
  else if (action.type === 'delete') {
    //delete the todo; removing from state.todo
  }
  return state;
}