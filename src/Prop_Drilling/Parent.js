import React from 'react'
import Child_A from './Child_A'

function Parent() {

   let MyName="Durga" 
  return (
    <div>Parent


<Child_A name={MyName}/>
    </div>
  )
}

export default Parent