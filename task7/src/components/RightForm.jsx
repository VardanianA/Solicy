import React, { useContext } from 'react';
import { MyContext } from './Context';

function RightForm() {
    const { data } = useContext(MyContext);

    return (
        <div className="right">
            {data.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default RightForm;
