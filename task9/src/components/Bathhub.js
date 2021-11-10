import { useState, useEffect } from "react";
import AddElement from "./AddElement";

function Bathhub({ count, decCount }) {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        if (count < 5) {
            setArr([...arr, count]);
        }
    }, [count]);

    useEffect(() => {
        if (decCount > -1) {
            arr.splice(decCount, 1);
        }
    }, [decCount]);

    return (
        <div className="item">
            {arr.map((item, index) => {
                return (
                    <AddElement item={item} key={index} />
                )
            })}
        </div>
    )
}

export default Bathhub;
