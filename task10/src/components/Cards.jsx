import React, { useState } from "react";
import Flipcard from "./Flipcard";
import RandomNumber from '../components/RandomNumber'

function Cards() {
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [isRotated, setIsRotated] = useState(false);
    const [random_arr, setRandomArr] = useState(RandomNumber());

    const handleClick = () => {
        setIsRotated(!isRotated);
    }

    return (
        <>
            {cards.map((card, index) => {
                if (random_arr.includes(card)) {
                    return <Flipcard card={card} isRotated={isRotated} />
                } else {
                    return <Flipcard card={card} key={index} />
                }
            })}
            <button className="btn" onClick={handleClick}>play</button>
        </>
    );
}

export default Cards;
