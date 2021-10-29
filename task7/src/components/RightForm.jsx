import React, { useContext } from 'react';
import { Context } from '../App';


function RightForm() {
    const text1 = useContext(Context);
    const text2 = useContext(Context);
    const text3 = useContext(Context);
    return (
        <div className="right">
            <p>{text1.text1}</p>
            <p>{text2.text2}</p>
            <p>{text3.text3}</p>
        </div>
    )
}

export default RightForm;