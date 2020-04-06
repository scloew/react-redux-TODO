import { ADD, MARK_COMPLETE, DELETE } from '../constants/redux-constants'

const addAction = (task) => {
  return {
    type: ADD,
    task: task
  }
}

const completeAction = (task) => {
  return {
    type: MARK_COMPLETE,
    task: task
  }
}

const addAction = (task) => {
  return {
    type: DELETE,
    task: task
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => { return dispatch(addAction) },
    markTaskComplete: (task) => { return dispatch(completeAction) },
    deleteTask: (task) => { return dispatch(addAction) },
  };
}

//TODO