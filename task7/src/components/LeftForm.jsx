import React, { useContext } from 'react';
import { Context } from '../App';



function LeftForm() {
    const text1 = useContext(Context);
    const text2 = useContext(Context);
    const text3 = useContext(Context);

    const handleChange1 = (e) => {
        text1.setText1(e.target.value);
    }
    const handleChange2 = (e) => {
        text2.setText2(e.target.value);
    }
    const handleChange3 = (e) => {
        text3.setText3(e.target.value);
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
}

export default LeftForm;
