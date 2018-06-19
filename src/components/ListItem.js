import React from 'react';

import Editor from './Editor';

/* 
  не надо этих километровых строк
  это невозмножно читать :)
  если строка получается слишком длинной каждый параметр с новой строки
*/
const ListItem = ({ id, text, completed, isEditing, toggleItem, editItem, editItemConfirm, deleteItem, changeItemView }) => {

  /* используй const плюс непонятное название compl. название ни о чем не говорит */
  let compl = completed ? 'completed' : '';
  let editing = isEditing ? 'editing' : '';

  /* props компонентов (длинные строки) каждый с новой строки */
  return (
    <li className={compl + ' ' + editing}>
      <Editor editItem={editItem} editItemConfirm={editItemConfirm} text={text} id={id} isEditing={isEditing} />
      <div className="view">
        <input className="toggle" type="checkbox" onChange={toggleItem} checked={completed} />
        <label onDoubleClick={changeItemView}>{text}</label>
        <button className="destroy" onClick={deleteItem} />
      </div>
    </li>
  )
}

export default ListItem;