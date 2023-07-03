import React, { useContext } from 'react'

import { data,data1 } from './Parent'

function ChildC() {

const Firstname=useContext(data)
const gender=useContext(data1)

  return (
    <div>ChildC

        <h3>Hi My Name is {Firstname} my gender is {gender}</h3>
    </div>
  )
}

export default ChildC