import React, { createContext } from 'react'
import ChildA from './ChildA'

export const data=createContext()
export const data1=createContext()

function Parent() {

const name="Durga"
const gender="Female"

  return (
    <div>Parent
    <data.Provider value={name}>
      <data1.Provider value={gender}>
      <ChildA/>
      </data1.Provider>
    
    </data.Provider>
      
    </div>
  )
}

export default Parent