import React from 'react';

const ToggleAll = ({ togglerState, toggle }) => {

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