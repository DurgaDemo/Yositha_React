import React, { useState } from 'react'
import ChildA from './ChildA'

function UseCallback() {

 const [add,setAdd] =useState(0)  

function Increase(){
    setAdd(add+1)
}

  return (
    <div> 
        <h1> Learning UseCallback</h1>
        <h2>{add}</h2>
       <button onClick={Increase}>Addition</button>
       <ChildA/>
        </div>
  )
}

export default UseCallback