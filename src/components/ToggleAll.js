import React from 'react';

const ToggleAll = ({ togglerChecked, toggle }) => {

  return (
    <div>
      <input
        className="toggle-all"
        type="checkbox"
        checked={togglerChecked}
        onChange={toggle}
      />
      <label className="for-toggle-all" />
    </div>
  )
}

export default ToggleAll;