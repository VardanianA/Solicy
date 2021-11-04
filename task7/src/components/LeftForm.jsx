import React, { useContext, useEffect } from 'react';
import { Context } from '../App';

function LeftForm() {
    const { inputFields, setInputField } = useContext(Context)

    const handlechange = (value, index) => {
        inputFields[index] = value;
        const newInputFields = [...inputFields];
        setInputField(newInputFields);
    };

    return (
        <div>
            {inputFields.map((field, index) => (
                <form className="left" key={index}>
                    <input type='text' onChange={(e) => handlechange(e.target.value, index)} />
                </form>
            ))}
        </div>
    );
};

export default LeftForm;
