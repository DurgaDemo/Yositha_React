/*
-> State is a built-in react object that is used to contain data or information
-> a state can be modified based on user action.
-> Every-time when the state of an object changes,react re-render the component to the browser.
*/


import React from 'react'

function State() {
let x=10
function UpdateState(){
   x=15
}
  return (
    <div>
        Learning state

    <h1>{x}</h1>
    <button onClick={UpdateState}>Click</button>
    </div>
  )
}

export default State