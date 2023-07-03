import React, { useState } from 'react'

function Array() {

const [item,setItem]=useState([])

const result=item.map((item)=>{
      return (
        <>
      <ol>
      <li>{item.value}</li>
      </ol>
      </>
      )
})


function Additem(){
  setItem([
    ...item,{
        id:item.length,
        // value:"pen",
        value:Math.random()
    }
  ])
}
  return (
    <div>Array Using useState

     {result}<br></br>
     <button onClick={Additem}>Update</button>

    </div>
  )
}

export default Array