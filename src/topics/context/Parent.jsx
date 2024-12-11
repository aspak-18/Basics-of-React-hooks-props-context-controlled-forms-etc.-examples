import React from 'react'
import { createContext } from 'react'
import ChildA from './ChildA';

export let ContextData=createContext();

const Parent = () => {
    let data="hello world";
    let product=[
        {id:1, title:"Mobile"},
        {id:2, title:"Laptop"}
    ]
  return (
    <div>
      <ContextData.Provider value={{data, product}}>
        <ChildA/>
      </ContextData.Provider>
    </div>
  )
}

export default Parent
