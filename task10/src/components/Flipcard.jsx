import React from "react";

function Flipcard({ card, isRotated }) {
    return (
        <div className={`card ${isRotated ? 'rotated' : ''}`} >
            <div className="front" />
            <div className="back">{card}</div>
        </div>
    );
}

export default Flipcard;
