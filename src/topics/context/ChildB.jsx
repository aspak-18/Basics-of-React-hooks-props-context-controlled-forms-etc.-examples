import React from 'react'
import { useContext } from 'react'
import {ContextData, contextData} from './Parent'

const ChildB = () => {
    let {data, product}=useContext(ContextData);
    console.log(product)
  return (
    <div>
      {
        product.map((ele)=>{
            console.log(ele);
            return <h1 key={ele.id}>{ele.title}</h1>
        })
      }
    </div>
  )
}

export default ChildB
