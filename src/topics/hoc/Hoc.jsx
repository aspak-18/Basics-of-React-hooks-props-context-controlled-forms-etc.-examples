import React from 'react'

const Hoc = (WrappedComp) => {
    return()=>{
        return <WrappedComp users={[{id:1,ename:"Ashfaq"}]}/>
    }

}
export default Hoc;
