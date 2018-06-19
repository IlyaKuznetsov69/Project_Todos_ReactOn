import React from 'react';

const ClearButton = ({ buttonVisible, clearCompleted }) => {

  const classes = (state) => {
    return (state === true) ? 'clear-completed' : 'clear-completed hidden'
  }

  /* не нужно писать такие длинные строчки кода
   разбивай объявление пропсов на несколько линий */
  return (
    <button className={classes(buttonVisible)} onClick={clearCompleted}>Удалить завершенные</button>
  )
}

export default ClearButton;
