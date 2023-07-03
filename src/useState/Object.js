import React, { useState } from 'react'

function Object() {

const [allvalues,setValues]=useState({
    firstName:"Durga",
    lastName:"Mohapatra"
})

function Update(){
    setValues({...allvalues,firstName:"SatyaNarayan"})
}

  return (
    <div>Object using useState
<h3>My Name is {allvalues.firstName} my last Name is {allvalues.lastName}</h3>
 <button onClick={Update}>Update</button>
    </div>
  )
}

export default Object