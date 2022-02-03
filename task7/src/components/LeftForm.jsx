import React, { useContext } from 'react';
import { MyContext } from './Context';

function LeftForm() {
    const { data, setData } = useContext(MyContext);

    const handlechange = (value, index) => {
        const newData = [...data];
        newData[index] = value;
        setData(newData);
    };

    return (
        <div>
            {data.map((item, index) => (
                <form className="left" key={index}>
                    <input type='text' onChange={(e) => handlechange(e.target.value, index)} />
                </form>
            ))}
        </div>
    );
};

export default LeftForm;
