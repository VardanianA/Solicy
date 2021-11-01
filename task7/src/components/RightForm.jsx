import React, { useContext } from 'react';
import { Context } from '../App';

function RightForm() {
    const inputField = useContext(Context);
    const midInputField = useContext(Context);
    const endInputField = useContext(Context);

    return (
        <div className="right">
            <p>{inputField.inputField}</p>
            <p>{midInputField.midInputField}</p>
            <p>{endInputField.endInputField}</p>
        </div>
    )
}

export default RightForm;
