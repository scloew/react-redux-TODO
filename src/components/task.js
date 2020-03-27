import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'


export default class Task extends Component {

  render() {
    return (
      <h1 className='todo'>
        <p>{this.props.text}</p>
        <p><button class="ui icon button"><i aria-hidden="true" i class="thumbs up icon">mark completed</i></button></p>
      </h1>
    );
  }
}