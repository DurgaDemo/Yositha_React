import React,{useState} from 'react'

function Uncontrolled() {


    const [name,setName]=useState('')
    const [pswd,setPswd]=useState('')


    function HandleChange(event){
     if(event.target.name=='firstName'){
      const capName=(event.taget.value).toUpperCase()
      setName(capName)
     }
     else{
        setPswd(event.taget.value)
     }
    }
    


  return (
    <div>Uncontrolled Controlled_component

<form>
    <label>First Name:</label><br/>
    <input type='text' name='firstName'value={name} onChange={HandleChange}/><br></br>
    <label>Password:</label><br/>
    <input type='password' name='password'value={pswd} onChange={HandleChange}/>
  </form>

    </div>
  )
}

export default Uncontrolled