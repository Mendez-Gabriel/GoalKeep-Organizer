import React from 'react'

const ButtonGeneral = ({text, click, buttonStyle , type, dataBS, dataTarget}) => {
  return (
    <div>
      <button type={type} data-bs-toggle={dataBS} data-bs-target={dataTarget} className={`btn ${buttonStyle} `} onClick={click}>{text}</button>
    </div>
  )
}

export default ButtonGeneral