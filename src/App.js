import './App.css';
import NavComponent from './components/nav-component';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    todo: state.todo,
    completed: state.completed
  };
}

var addAction = { type: 'addTodo' };
var markCompleteAction = { type: 'markComplete' };
var deleteTaskAction = { type: 'delete' }; // these should have task shouldn't they

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => { return dispatch(addAction, task) },
    markTaskComplete: (task) => { return dispatch(markCompleteAction, task) },
    deleteTask: (task) => { return dispatch(deleteTaskAction, task) },
  };
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);

export default connectedComponent;
