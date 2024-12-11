import React, { useCallback, useMemo, useState } from 'react'
import Callback from './Callback'


const Memo = () => {
    let [add,setAdd]=useState(0)
    let [minus,setMinus]=useState(100)
    
    // function multiply(){
    //   console.log("multiplly")
    //   return add*10
    // }

    const multiply=useMemo(()=>{
      console.log("multiply")
      return add*10
    },[add])

    let display=useCallback(()=>{
      console.log("i am display function")
    })

  return (
    <div>
      <h1>MEMO EXAMPLE</h1>
      <h2>Multiply {multiply}</h2>
      <h2>Add {add} <button onClick={()=>setAdd(add+1)}>add</button></h2>
      <h2>Minus {minus} <button onClick={()=>setMinus(minus-1)}>minus</button></h2>
      <Callback/>
    </div>
  )
}

export default Memo
