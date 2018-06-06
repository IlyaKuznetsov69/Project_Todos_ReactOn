import React from 'react';

import ListItemContainer from '../containers/ListItemContainer';

const List = ({ listItems }) => {

  return (
    <ul className="todo-list">
      {listItems.map((item) => {
        return <ListItemContainer key={item.id} {...item} />
      })
      }
    </ul>
  )
}

export default List;