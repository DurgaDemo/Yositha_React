/*
-> UseMemo is used for increase the performane of application
-> if function is rerendering unnecessaryly then we will use useMemo

*/


import React, { useMemo, useState } from 'react'

function UseMemo() {

const [add,setadd]=useState(0)
const [minus,setminus]=useState(100)

const multification=useMemo(function Multiplay(){
    console.log("*********************");
    return add*10
},[add])


function Addition(){
    setadd(add+1)
}

function Subtration(){
    setminus(minus-1)
}

// function Multiplay(){
//     console.log("*********************");
//     return add*10
// }



  return (
    <div>
        <h1>Learing UseMemo</h1>
        {/* {Multiplay} */}
          {multification}
          <br></br>
        <button onClick={Addition}>Addition</button>
        <span>{add}</span> <br></br>
        <button onClick={Subtration}>Subtration</button>
        <span>{minus}</span>
        
        </div>
  )
}

export default UseMemo