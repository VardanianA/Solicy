import React, { useContext } from 'react';
import { Context } from '../App';

function LeftForm() {
    const inputField = useContext(Context);
    const midInputField = useContext(Context);
    const endInputField = useContext(Context);

    const handleChange1 = (e) => {
        inputField.setInputField(e.target.value);
    }

    const handleChange2 = (e) => {
        midInputField.setMidInputField(e.target.value);
    }

    const handleChange3 = (e) => {
        endInputField.setEndInputField(e.target.value);
    }

    return (
        <div>
            <form className="left">
                <input type='text' onChange={handleChange1}></input>
            </form>
            <form className="left">
                <input type='text' onChange={handleChange2}></input>
            </form>
            <form className="left">
                <input type='text' onChange={handleChange3}></input>
            </form>
        </div>
    );
};

export default LeftForm;
