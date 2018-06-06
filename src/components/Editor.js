import React, { Component } from 'react';

class Editor extends Component {

  render() {
    if (this.props.isEditing) {
      return (
        <input
          onBlur={this.props.editItem}
          onKeyPress={this.props.editItemConfirm}
          type="text"
          className="edit"
          defaultValue={this.props.text}
          ref={input => input && input.focus()}
        />
      )
    } else return null
  }
}

export default Editor;