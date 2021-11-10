import React, { useState } from "react"
import Buttons from './Buttons';
import Bathhub from "./Bathhub";

function Section() {
  const [count, setCount] = useState(0);
  const [decCount, setDecCount] = useState(4);

  const addWater = () => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);

  }

  const deleteWater = () => {
    setInterval(() => {
      setDecCount(prevCount => prevCount - 1)
    }, 2000);
  }

  return (
    <div className="main-container">
      <Buttons addWater={addWater} deleteWater={deleteWater} />
      <Bathhub count={count} decCount={decCount} />
    </div>
  )
}

export default Section;
