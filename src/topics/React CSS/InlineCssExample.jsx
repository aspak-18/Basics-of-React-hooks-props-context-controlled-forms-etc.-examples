import React from 'react'

function InlineCssExample() {
  return (
    <div>
      <h1 style={{backgroundColor:"black",color:"gold"}}>Ashfaque</h1>

      <nav style={{height:"70px",width:"100%",backgroundColor:"aqua"}}>

        <aside style={{alignItems:"flex-start"}}>logo</aside><br />
        
            <ul style={{height:"100%",display:"flex",gap:"20px",justifyContent:"flex-start"}}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
      </nav>
    </div>
  )
}

export default InlineCssExample
