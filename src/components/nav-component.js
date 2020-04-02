import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import TodoContainer from './todo-container';
import Completed from './completed';
import OverDue from './over-due';
import StateLogger from './state-logger' //TODO this a debug component and will need to be removed


export default class NavComponent extends Component {
  render() {
    console.log(`rendered navcomponent\n props check: ${this.props.addTask}`)
    console.log(`rendered navcomponent\n state check: ${this.props.todo}`)
    return (
      <HashRouter>
        <div>
          <h1>TODO for TACOS</h1>
          <ul className='header'>
            <li><NavLink exact to='/'>TODO</NavLink></li>
            <li><NavLink to='/completed'>Completed</NavLink></li>
            <li><NavLink to='/overdue'>OverDue</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={TodoContainer} />
            <Route path='/completed' component={Completed} />
            <Route path='/overdue' component={OverDue} />
          </div>
        </div>
        {/* <div>
          <button onClick={console.log(`counter is ${this.state.counter}`)}>
            view counter
          </button>
        </div> */}
        <div>
          <StateLogger addTask={this.props.addTask} increment={this.props.incrementTestCounter} />
        </div>
      </HashRouter >
    )
  }
}