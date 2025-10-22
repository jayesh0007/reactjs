Counter.js
we made use of useState to incre and decre counter.

Timer.js
we made use of useEffect here.
so we do operations here which will not affect other components/operation.
like here timer keeps going on even we are doing incre/decre.

useEffect is a React Hook that lets you run side effects in your function component — like setting up timers, fetching data, manually manipulating the DOM, etc.

setInterval is a browser API that calls a function every X milliseconds.
Here, you're setting up a 1-second interval that keeps executing.

clearInterval(interval) stops the interval from continuing

}, []);

This is the dependency array.

[] means this effect only runs once, right after the component mounts — just like componentDidMount in class components.

If you added dependencies inside the array, it would re-run when those values change.