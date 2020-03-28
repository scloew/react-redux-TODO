import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'

export default class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render() {
    console.log('modal rendered');
    return (
      <div>
        <Modal size='Tiny' open={this.state.open} onClose={() => { this.setState({ open: false }) }}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>test test </p>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
