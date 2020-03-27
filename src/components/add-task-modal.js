import React from "react";
import Modal from "./Component/Modal";


export default class AddTodo extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>add modal</h1>
        <input placeholder='enter new todo'></input>
        <Modal />
      </div>
    );
  }
}
