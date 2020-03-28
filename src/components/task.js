import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react'


export default class Task extends Component {

  render() {
    return (
      <h1 className='todo'>
        <p>{this.props.text}</p>
        <Button className="ui icon button" style={{ backgroundColor: 'red' }}
          onClick={() => { console.log('trash button clicked') }}
        > <Icon name="trash alternate"></Icon></Button>
        <Button className="ui icon button"
          onClick={() => { console.log('done button clicked') }}><Icon name="thumbs up"></Icon></Button>
      </h1 >
    );
  }
}