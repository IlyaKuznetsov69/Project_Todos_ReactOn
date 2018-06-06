import React from 'react';

const Counter = ({ itemsLeft }) => {

  const text = (count) => {
    return (count === 1) ? 'дело осталось' : 'дел осталось'
  }

  return (
    <span className="todo-count">
      <strong>{itemsLeft}</strong>
      {' ' + text(itemsLeft)}
    </span>
  )
}

export default Counter;