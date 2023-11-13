import React from 'react'

const Dropdown = ({text, dropdownStyle}) => {
    return (
        <>
            <button className={`btn ms-2 dropdown-toggle ${dropdownStyle}`} type="button" data-bs-toggle='dropdown'>
                {text}
            </button>
        </>
    )
}

export default Dropdown;