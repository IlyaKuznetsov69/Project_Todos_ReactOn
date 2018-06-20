import React from 'react';

import Editor from './Editor';

const ListItem = ({
  id,
  text,
  completed,
  isEditing,
  toggleItem,
  editItem,
  editItemConfirm,
  deleteItem,
  changeItemView }) => {

  const itemIsCompleted = completed ? 'completed' : '';
  const itemIsEdited = isEditing ? 'editing' : '';

  return (
    <li className={itemIsCompleted + ' ' + itemIsEdited}>
      <Editor
        editItem={editItem}
        editItemConfirm={editItemConfirm}
        text={text}
        id={id}
        isEditing={isEditing}
      />
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={toggleItem}
          checked={completed}
        />
        <label onDoubleClick={changeItemView}>{text}</label>
        <button className="destroy" onClick={deleteItem} />
      </div>
    </li>
  )
}

export default ListItem;