import React from 'react';

const Filter = ({ href, className, text, selected, setIt }) => {

  /*
    есть готовая библиотека для таких вот вещей, советую использовать
    https://github.com/JedWatson/classnames
  */
  const classNameSet = (className, selected) => {
    /* зачем let ? где есть возможность используй const */
    let active = (selected === true) ? 'selected' : '';
    return className + ' ' + active
  }

  return (
    <li>
      <a href={href} className={classNameSet(className, selected)} onClick={setIt}>{text}</a>
    </li>
  )
}

export default Filter;