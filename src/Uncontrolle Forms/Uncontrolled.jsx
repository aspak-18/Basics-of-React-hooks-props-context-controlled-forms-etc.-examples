import React, { useRef } from 'react'

const Uncontrolled = () => {
    // console.log(useRef()) {current: undefined}

    let demoRef=useRef();


    function bgChange(){
        console.log("bgchange")
        console.log(demoRef.current)
        demoRef.current.style.backgroundColor="gold";
    }
  return (
    <div>
      <h1 ref={demoRef}>uncontrolled Forms</h1>
      <button onClick={bgChange}>Click</button>
    </div>
  )
}

export default Uncontrolled
