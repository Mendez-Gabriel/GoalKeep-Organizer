import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputReact = ({ margin, type, handleChange, handleClick, text, name, placeholder }) => {
    return (
        <>
            <InputGroup className={margin}>
                <Form.Control placeholder={placeholder} type={type} onChange={(event) => { handleChange(event) }} name={name}/>
                <Button id="basic-addon1" onClick={(click) => { handleClick(click) }}>
                    {text}
                </Button>
            </InputGroup>
        </>
    )
}

export default InputReact;