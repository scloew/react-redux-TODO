import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import TodoContainer from './todo-container';
import Completed from './completed';
import OverDue from './over-due';


export default class NavComponent extends Component {
  render() {
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
      </HashRouter>
    )
  }
}