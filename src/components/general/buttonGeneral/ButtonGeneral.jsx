import React from 'react'

const ButtonGeneral = ({text, click, buttonStyle}) => {
  return (
    <div>
      <button type="button" data-bs-toggle="button" className={`btn ${buttonStyle} `} onClick={click}>{text}</button>

    </div>
  )
}

export default ButtonGeneral