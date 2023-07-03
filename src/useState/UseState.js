/*
Rules of Hooks
--------------
1->Must be written in function component
2->Must be import in component
3-Must be call top level of component
4-can't be conditional



*/






import React, { useState } from 'react'

function UseState() {

const [count,setCount]=useState(0)

function Updatecount(){
    setCount(count+1)
}

  return (
    <div>
    UseState Learning
   <h1>Button Clicked {count} times</h1>
    <button onClick={Updatecount}>Clicked</button>
    </div>
  )
}

export default UseState