import React from 'react';

const ButtonDropdown = ({ text, buttonStyle, click, value }) => {
  return (
    <div>
      <button type="button" data-bs-toggle="button" className={`dropdown-item ${buttonStyle} `} onClick={click}>{text}</button>
    </div>
  )
}

export default ButtonDropdown;