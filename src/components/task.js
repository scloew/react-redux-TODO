import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react'


export default class Task extends Component {

  render() {
    return (
      <h1 className='todo'>
        <p>{this.props.text}</p>
        <Button class="ui icon button"><Icon name="thumbs up"></Icon></Button>
      </h1>
    );
  }
}