import React, { useReducer } from 'react'

const Reducer = () => {
    // let initialstate=0
    // function reducerFunc(state,action){
    //     console.log(state,action)
    //     switch (action) {
    //         case "increment":
    //         return state+1;

    //         case "decrement":
    //             if(state<0){
    //                 return state=0
    //             }
    //             else{
    //                 return state-1;
    //             }
    //         case "reset":
    //             return 0;
    //         default:
    //             break;
    //     }
    // }

    let initialstate={count:0}
    function reducerFunc(state,action){
        console.log(state,action)
        switch (action) {
            case "increment":
                return {count:state.count+1}

            case "decrement":
                if (state.count<=0) {
                    return {count:0}
                }
                else{
                    return {count:state.count-1}
                }

            case "reset":
                return {count:0}
            default:
                break;
        }

    }

    let [state, dispatch]=useReducer(reducerFunc,initialstate)
  return (
    <div>
      <h1>State {state.count}</h1>
      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default Reducer
