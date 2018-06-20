import React, { Component } from 'react';

class Editor extends Component {

  render() {
    const { isEditing, editItem, editItemConfirm, text } = this.props;
    if (isEditing) {
      return (
        <input
          onBlur={editItem}
          onKeyPress={editItemConfirm}
          type="text"
          className="edit"
          defaultValue={text}
          ref={input => input && input.focus()}
        />
      )
    } return null
  }
}

export default Editor;