import { useState } from 'react';

import '../../styles/trafficLight.css'


const TrafficLight = () => {
    const [color, setColor] = usestate('red');
      
    return (
       <>
                <div className="traffic light stem"></div>
                <div className="traffic light body">
                    <div
                         className="light red">
                         onClick={() => setColor('red')}
                         </div>
                    <div 
                        className="light yellow">
                        onClick={}
                        </div>
                    <div
                        className="light green">
                          onClick={}    
                        </div>
                </div>
        </>
     );   
}

export default TrafficLight;