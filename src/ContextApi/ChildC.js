import React from 'react'
import {NewName} from './Parent'
function ChildC() {
  return (
    <div>ChildC
   <NewName.Consumer>
    {
        (name1)=>{
            return(
                <>
                <h2>My Name is {name1}</h2>
                </>
            )
        }
    }
   </NewName.Consumer>

    </div>
  )
}

export default ChildC