import React from 'react';

const ToggleAll = ({ togglerState, toggle }) => {
  /* 
    что за название класса с нижним подчеркиванием? :) везде
    придерживайся одного стиля
    togglerState - не оч крутое название для переменной
  */
  return (
    <div>
      <input
        className="toggle-all"
        type="checkbox"
        checked={togglerState}
        onChange={toggle}
      />
      <label className="for_toggle-all" />
    </div>
  )
}

export default ToggleAll;