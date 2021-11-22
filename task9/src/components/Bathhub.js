import { useState, useEffect } from "react";
import Water from "./Water";

function Bathhub({ count }) {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const new_arr = [];
        for (let i = 0; i <= count; i++) {
            new_arr.push(i);
        }
        setArr(new_arr);
    }, [count])

    return (
        <div className="item">
            {arr.map(() => {
                return (
                    <Water />
                )
            })}
        </div>
    )
}

export default Bathhub;
