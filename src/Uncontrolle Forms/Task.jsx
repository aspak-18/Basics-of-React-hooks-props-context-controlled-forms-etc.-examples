import React, { useRef } from 'react'

const Task = () => {
    let demoRef=useRef();
    // function change(){
    //     document.body.style.backgroundColor="gold"
    //     document.body.style.Color="magenta"
    // }

    let light=()=>{
        demoRef.current.style.backgroundColor="gainsboro"
        demoRef.current.style.color="brown"
    }
    let dark=()=>{
        demoRef.current.style.backgroundColor="black"
        demoRef.current.style.color="white"
    }

    return (
    <div ref={demoRef} style={{height:"100vh"}}>
      <h1>Hello World</h1>
      <br /><br />
      <span>Light</span>
      <input type="radio" name="color" onChange={light}/>
      <br /><br />
      <span>Dark</span>
      <input type="radio" name="color" onChange={dark}/>
    </div>
  )
}

export default Task
