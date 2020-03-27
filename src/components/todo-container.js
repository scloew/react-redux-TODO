import React, { Component } from 'react';
import Task from './task';

export default class TodoContainer extends Component {

  render() {
    return (
      <div>
        <p>your todos go here :)</p>
        <Task text="this is a template todo" />
      </div >
    )
  }
}