import React from 'react';

const Filter = ({ href, className, text, selected, setIt }) => {

  const classNameSet = (className, selected) => {
    const active = (selected === true) ? 'selected' : '';
    return className + ' ' + active
  }

  return (
    <li>
      <a
        href={href}
        className={classNameSet(className, selected)}
        onClick={setIt}>
        {text}
      </a>
    </li>
  )
}

export default Filter;