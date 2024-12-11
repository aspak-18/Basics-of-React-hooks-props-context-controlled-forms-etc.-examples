import { useState } from "react";

const StatesInFBC=()=>{
    
    let[state,setState]=useState(1);
    // console.log(state);
    // console.log(setState);

    function change(){
        console.log("Button Clicked");
        setState(state+1)    
    }
    
    return(
        <div>
            <h1>States in FBC {state}</h1>
            <button onClick={change}>Click</button>
        </div>
    )
}
export default StatesInFBC;