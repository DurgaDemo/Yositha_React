import axios from 'axios'
import React, { useState } from 'react'

function Post() {

const data={fname:"",lastName:""}
const [inputData,setInputData]=useState(data)


function handleData(event){
    setInputData({...inputData,[event.target.name]:event.target.value})
}

function handleSubmit(event){
//   event.preventDefault()
  axios.post("https://jsonplaceholder.typicode.com/users",inputData)
  .then((respose)=>{
  console.log(respose);
  })
  .catch((error)=>{
   console.log(error)
  })
}

  return (
    <div>Post
<br></br>
 <label>First Name:</label>
 <input type='text' name='fname' value={inputData.fname} onChange={handleData}/><br></br>
 <label>Last Name:</label>
 <input type='text' name='lastName' value={inputData.lastName} onChange={handleData}/><br></br>
<button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Post