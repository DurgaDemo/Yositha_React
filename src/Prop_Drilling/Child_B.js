import React from 'react'
import Child_C from './Child_C'

function Child_B(props) {
  return (
    <div>Child_B

        <Child_C name={props.name}/>
    </div>
  )
}

export default Child_B



// function Child_B({name}) {
//     return (
//       <div>Child_B
  
//           <Child_C name={name}/>
//       </div>
//     )
//   }
  
//   export default Child_B