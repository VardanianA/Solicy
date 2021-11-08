import React, { useState } from "react";
import { colors } from "./Colors";

function ColorCard() {
    const [data, setData] = useState(colors);

    const handleClick = () => {
        const newData = [];
        let item = data[data.length - 1];
        newData.push(item);
        for (let i = 0; i <= data.length - 2; i++) {
            newData.push(data[i]);
        }
        setData(newData);
    }

    return (
        <div className="items">
            {data.map((color, index) => (
                <div className="item" key={index} style={{ backgroundColor: color }}></div>
            ))}
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    );
}

export default ColorCard;
