import React from 'react';

const ClearButton = ({ buttonVisible, clearCompleted }) => {

  const classes = (state) => {
    return (state === true) ? 'clear-completed' : 'clear-completed hidden'
  }

  return (
    <button className={classes(buttonVisible)} onClick={clearCompleted}>Удалить завершенные</button>
  )
}

export default ClearButton;
