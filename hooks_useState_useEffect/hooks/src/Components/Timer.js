import React, {useState, useEffect} from 'react'

function Timer() {

    const [timer,setTimer] = useState(0);

    useEffect(() =>{
        const interval = setInterval(()=>{
            setTimer(prev => prev+1);
        },1000);

        return () => clearInterval(interval);
    },[]);

  return (
    <div>
        <h3>Timer: {timer}</h3>
    </div>
  )
}

export default Timer
