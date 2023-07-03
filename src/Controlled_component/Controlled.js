import React, { useState } from 'react'

function Controlled() {

const [name,setName]=useState('')
const [pswd,setPswd]=useState('')

function username(event){
    const uppercase=(event.target.value).toUpperCase()
    setName(uppercase)
    // setName(event.target.value)
}

function handlepassword(event){
    setPswd(event.target.value)
}

  return (
    <div>Controlled Controlled_component

  <form>
    <label>First Name:</label><br/>
    <input type='text'value={name} onChange={username}/><br></br>
    <label>Password:</label><br/>
    <input type='password'value={pswd} onChange={handlepassword}/>
  </form>


    </div>
  )
}

export default Controlled