//todo need to name this better
//should file structure be modified?

//nice resource
//https://redux.js.org/style-guide/style-guide/

//todo raname better
export default function updateLists(state, action) {
  if (state === undefined) {
    state = {
      todo: [],
      completed: [],
      counter: 0
    }
  }
  if (action.type === 'addTodo') {
    //add to state.todo
    let todos = state.todo;
    return todos.concat(action.Task);
  }
  else if (action.type === 'markComplete') {
    //remove from todo and add to complete
    let done = this.state.completed;
    let todo = this.state.todo;
    return {
      done: done.concat(
        todo.find((item) => {
          return item === action.Task.id
          //TODO, do I need the task id?
          //Shouldn't object reference cover this?
        })
      ),
      todo: todo.filter((item) => {
        return item !== action.Task
      })
    }
  }
  else if (action.type === 'delete') {
    //delete the todo; removing from state.todo
    let todo = this.state.todo
    return {
      todo: todo.filter((item) => {
        return item !== action.Task
      })
    }
  }
  else if (action.type === 'counter') {
    let counter = state.counter;
    return { counter: counter + 1 }
  }
  return state;
}