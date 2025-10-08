import { useState } from "react";

import '../../styles/TrafficLight.css';


  const TrafficLight = () => {
  const [color, setColor] = useState('');





  return (
    
    <>
      <div className="traffic-light-stem"></div>
      <div className="card traffic-light-body bg-dark">
        <div
          className={
            `color ${color === "red" ? "light red is selected" : "light red"}`
          }
          onClick={() => setColor("red")}
        ></div>
        <div
          className={
            `color ${color === "yellow" ? "light yellow is selected" : "light yellow"}`
          }
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={
            `color ${color === "green" ? "light green is selected" : "light green"}`
          }
          onClick={() => setColor("green")}
        ></div>
      </div>

      
    </>
  )
};

export default TrafficLight;
