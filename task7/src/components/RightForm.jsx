import React, { useContext } from 'react';
import { Context } from '../App';

function RightForm() {
    const { inputFields } = useContext(Context);

    return (
        <div className="right">
            {inputFields.map((field, index) => (
                <p key={index}>{field}</p>
            ))}
        </div>
    );
};

export default RightForm;
