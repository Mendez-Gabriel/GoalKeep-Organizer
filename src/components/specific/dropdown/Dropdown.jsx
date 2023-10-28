import React from 'react'

const Dropdown = ({text, dataBS}) => {
    return (
        <>
            <button className="btn bg-secundary text-light ms-2 dropdown-toggle" type="button" data-bs-toggle={dataBS}>
                {text}
            </button>
        </>
    )
}

export default Dropdown;