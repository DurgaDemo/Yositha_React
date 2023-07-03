import React, { createContext } from 'react'
import ChildA from './ChildA'
export const NewName=createContext()
function Parent() {

  let name1="Durga"

  return (
    <div>Parent
        <NewName.Provider value={name1}>
        <ChildA/>
       
        </NewName.Provider>
        
    </div>
  )
}

export default Parent