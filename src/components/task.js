import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react'


export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: Date.now().toString(),
      overdue: false, //tODO add these later
      active: true //having this prop allows for the same component being displayed in complete
      //without the thumbs up complete button; still need to move state
    };
  } //this will also have props of description, due date, priority

  render() {
    console.log(`task id = ${this.state.id}`)
    return (
      <div className='todo'>
        <p>{this.props.text}</p>
        <Button className="ui icon button" style={{ backgroundColor: 'red' }}
          onClick={() => { console.log('trash button clicked') }}
        > <Icon name="trash alternate" onClick={() => {
          console.log(`deleted task ${this.state.id}`);
          this.setState({ active: false })
        }}>
          </Icon></Button>
        {this.state.active ? (<Button className="ui icon button"
          onClick={() => {
            console.log(`completed task ${this.state.id}`);
            this.setState({ active: false })
          }}>
          <Icon name="thumbs up"></Icon></Button>) : null}
      </div >
    );
  }
}