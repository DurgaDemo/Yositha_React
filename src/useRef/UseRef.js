
/*
-> By using useref we can manipulate our dom.
->


*/





import React, { useRef,useState } from 'react'

function UseRef() {

 const refElement=useRef()  
 const [name,setName]=useState("Durga") 
 console.log(refElement);

  const onChange=(event)=>{
   setName(event.target.value)
  }

  const ReSet=()=>{
    setName("")
    refElement.current.focus()
  }

const HandleInput=()=>{
refElement.current.style.color="red"
refElement.current.value="mohapatra"
}

  return (
    <div> 
    Learing UseRef
    <br></br>
    <input ref={refElement} type='text' value={name} onChange={onChange}></input>
   <button onClick={ReSet}>Reset</button>
   <button onClick={HandleInput}>HandleInput</button>
    </div>
  )
}

export default UseRef