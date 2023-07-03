import React,{useState,useEffect} from 'react'

function UseEffect() {

    const [count,setCount]=useState(0)
    const [data,setData]=useState("Ram")


    function Updatecount(){
        setCount(count+1)
    }

    function Updatedata(){
        setData("Seeta")
    }
    
    useEffect(()=>{
        console.log("component mounted")
    },[data])


  return (
    <div>
    UseEffect Learning

    <h1>Button Clicked {count} times</h1>
    <button onClick={Updatecount}>Clicked</button>
    
    <hr></hr>

    <h2>{data}</h2>
    <button onClick={Updatedata}>Click</button>
    </div>
  )
}

export default UseEffect