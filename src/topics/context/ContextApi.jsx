import React, { createContext } from 'react'

export let GlobalData =createContext();

const ContextApi = (props) => {
    console.log(props)
    let data="Hello World";
  return (
      <GlobalData.Provider value={data}>
        {props.children}
      </GlobalData.Provider>
  )
}

export default ContextApi
