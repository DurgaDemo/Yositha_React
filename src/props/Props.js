/*
->Props stands for properties
->Props are used to transfer data from one component to another
->Props are read only
->props are nothing but parameter in react
*/


import React from 'react'

function Props(props) {
    // props.name="Ram"   // props are immutable we can't change the value
  return (
    <div>
        <h3> My Name is {props.name} and age is {props.age}</h3>
    </div>
  )
}

export default Props