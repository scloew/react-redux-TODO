import React, { Component } from 'react';
import Task from './task';
import { Button, Icon } from 'semantic-ui-react'
import AddTask from './addTask';


export default class TodoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      tasks: []
    };
  }

  render() {
    return (
      <div>
        <p>your todos go here :)</p>
        <h1>
          {this.state.modal ? (
            <AddTask />
          ) : null}
          <Button className="ui icon button" onClick={() => { this.setState({ openModal: !this.state.openModal }) }}> <Icon name="plus"></Icon></Button>
          <Task text="this is a template todo" />
        </h1>
      </div >
    )
  }
}