import { useState, useEffect } from "react";
import AddElement from "./AddElement";

function Bathhub({ count, decCount }) {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        if (count < 5) {
            setArr([...arr, count]);
        }
        if (decCount > -1) {
            arr.splice(decCount, 1);
        }
    }, [count, decCount]);

    return (
        <div className="item">
            {arr.map(() => {
                return (
                    <AddElement />
                )
            })}
        </div>
    )
}

export default Bathhub;
