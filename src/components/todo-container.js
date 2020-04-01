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

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      openModal: !this.state.openModal
    })
  } //I think this should be handled by redux

  /*
  could reuse this component for completed and todo by providing different lists
  to render or different filter function to select what to display from store

  the only thing would be the modal, but could wrap that together differently
  */

  render() {
    return (
      <div>
        <p>your todos go here :)</p>
        <h1>
          {this.state.openModal ? ( //I think this should be handled by redux setting open to true
            <AddTask close={this.toggleModal} />
          ) : null}
          <Button className="ui icon button" onClick={this.toggleModal}> <Icon name="plus"></Icon></Button>
          <Task text="this is a template todo" />
          <p>
            {this.props.todos /*list the todos from stor*/}
          </p>
        </h1>
      </div >
    )
  }
}