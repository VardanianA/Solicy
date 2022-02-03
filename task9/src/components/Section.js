import React, { useState } from "react"
import Bathhub from "./Bathhub";
import Buttons from './Buttons';

function Section() {
  const [count, setCount] = useState(0);

  let startTime, interval;

  const addWater = () => {
    startTime = new Date().getTime();
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      if (new Date().getTime() - startTime > 8000) {
        clearInterval(interval);
        return;
      }
    }, 2000);
  }

  const deleteWater = () => {
    startTime = new Date().getTime();
    interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
      if (new Date().getTime() - startTime > 8000) {
        clearInterval(interval);
        return;
      }
    }, 2000);
  }

  return (
    <div className="main-container">{count}
      <Buttons addWater={addWater} deleteWater={deleteWater} />
      <Bathhub count={count} />
    </div>
  )
}

export default Section;
