import React, { Component } from 'react';
import { Modal, Form, Input, Radio, Button } from 'semantic-ui-react'

import CalendarComponent from './Calendar';

export default class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      checked: null
    }

    this.toggleRadioBtns = this.toggleRadioBtns.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  toggleRadioBtns(e, { value }) {
    this.setState({ value })
  }

  submitTask(e) {
    this.props.close();
    //this.props.AddTask(<task>); //todo fix this
    console.log('modal closed')
  }

  //TODO link this to action; reducer
  render() {
    console.log(this.state.date)
    return (
      <div className='AddTask-Modal'>
        <Modal size='small' open={this.state.open} closeIcon
          onClose={this.props.close}>
          <Modal.Header>ADD NEW TODO</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-new-task'
                  control={Input}
                  label='New Task'
                />
                <Form.Field
                  id='form-input-control-description'
                  control={Input}
                  label='Description'
                />
                <Form.Field
                  id='form-input-control-due-date'
                  control={Input}
                  label='Due Date'>
                  <CalendarComponent />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Easy'
                    name='radioGroup'
                    value='easy'
                    checked={this.state.value === 'easy'}
                    onChange={this.toggleRadioBtns}
                  />
                  <Radio
                    label='Medium'
                    name='radioGroup'
                    value='medium'
                    checked={this.state.value === 'medium'}
                    onChange={this.toggleRadioBtns}
                  />
                  <Radio
                    label='Hard'
                    name='radioGroup'
                    value='hard'
                    checked={this.state.value === 'hard'}
                    onChange={this.toggleRadioBtns}
                  />
                </Form.Field>
              </Form.Group>
              <Button type='submit' onClick={this.submitTask}>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
