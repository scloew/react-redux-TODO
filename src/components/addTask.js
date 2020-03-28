import React, { Component } from 'react';
import { Modal, Form, Input, Radio, Button } from 'semantic-ui-react'

export default class AddTask extends Component {

  constructor(props) {
    super(props);
    var today = new Date(),
      todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      open: true,
      date: todayStr,
      checked: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.setState({ value })
  }

  render() {
    return (
      <div class='AddTask-Modal'>
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
                  label='Due Date'
                />
                <Form.Field>
                  <Radio
                    label='Easy'
                    name='radioGroup'
                    value='easy'
                    checked={this.state.value === 'easy'}
                    onChange={this.handleChange}
                  />
                  <Radio
                    label='Medium'
                    name='radioGroup'
                    value='medium'
                    checked={this.state.value === 'medium'}
                    onChange={this.handleChange}
                  />
                  <Radio
                    label='Hard'
                    name='radioGroup'
                    value='hard'
                    checked={this.state.value === 'hard'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}