//TODO, this is a debug component and should only be visible under very specific instances

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
//import Task from './task';

export default class StateLogger extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
  }

  log(e) {
    console.log('log button pushed')
    console.log(`props===${this.props.addTask}`)
    console.log(`state===${this.state}`)
    this.props.increment();
  }

  render() {
    //let tempTask = <Task text='this is a test task' />
    //this.props.addTask(tempTask);
    //TODO trying to call reducer isn't workings
    return (
      <div>
        <Button type='submit' onClick={this.log}>Log State</Button>
      </div>
    )
  }
}