import { useState } from "react";

const Counter =()=>{
    let [count,setCount]=useState(0)
    function increment(){
        console.log(count);
        setCount(count+1)   
    }
    function decrement(){
        console.log(count);
        setCount(count-1)   
    }
    function reset(){
        console.log(count);
        setCount(0)   
    }
    return(
        <>
        <h1>Counter....{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter;