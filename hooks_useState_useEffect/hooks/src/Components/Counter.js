import React, {useState} from 'react'

function Counter() {

    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button className='' onClick={increment}>Increment</button>
      <button className='' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
