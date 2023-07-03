import axios from "axios";
import React, { useEffect, useState } from "react";

function Get() {
    const [userData,setData]=useState([])
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url)
      .then((respose) => {
        console.log(respose);
        setData(respose.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        Get

        {
            userData.map((data1)=>{
                return(
                    <div key={data1.name}>
                        {data1.name}
                    </div>
                )
            })
        }
    </div>
  )
  
}

export default Get;
