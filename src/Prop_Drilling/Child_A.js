import React from 'react'
import Child_B from './Child_B'

function Child_A(props) {
  return (
    <div>
     Child_A
        <Child_B name={props.name}/>
        </div>
  )
}

export default Child_A



// function Child_A({name}) {
//     return (
//       <div>
//        Child_A
//           <Child_B name={name}/>
//           </div>
//     )
//   }
  
//   export default Child_A