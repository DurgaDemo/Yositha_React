import React, { useState } from 'react'

function Child(props) {

const [name,setName]=useState()

function ChangeEvent(event){
  setName(event.target.value)
 
}

function handleSubmit(event){
  event.preventDefault()
  props.getData(name)
}

  return (
    <div> Passing data Child to parent
   <form onSubmit={handleSubmit}>
    <input type='text' value={name} onChange={ChangeEvent}/>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default Child