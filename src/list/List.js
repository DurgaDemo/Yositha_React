// import React from 'react'

// function List() {

// const IPL=["CSK","MI","RCB"]

//   return (
//     <div>List In React

// {
//     IPL.map((value)=>{
//        return <li key={value}>{value}</li>
//     })
// }

//     </div>
//   )
// }

// export default List










import React from 'react'

function List() {

const IPL=["CSK","MI","RCB"]

const result= IPL.map((value)=>{
       return <li key={value}>{value}</li>
    })


  return (
    <div>List In React
     {result}
    </div>
  )
}

export default List


