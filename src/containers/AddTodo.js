import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addListItem } from '../actions/actions';

class AddTodo extends Component {
  constructor(props, { dispatch }) {
    super(props, { dispatch });

    this.addItem = this.addItem.bind(this);
    this.addItemConfirm = this.addItemConfirm.bind(this);
  }

  addItem(event) {
    const text = event.target.value;
    const id = Date.now().toString();
    if (text !== '') {
      this.props.dispatch(addListItem(id, text));
      event.target.value = '';
    }
  }

  addItemConfirm(event) {
    if (event.key === "Enter") {
      this.addItem(event);
    }
  }

  render() {
    return (
      <input
        onBlur={this.addItem}
        onKeyPress={this.addItemConfirm}
        type="text"
        className="new-todo"
        placeholder="Что бы еще сделать?"
        autoFocus
      />
    )
  }
}

export default connect()(AddTodo);