import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Data() {
  const[data,setData] = useState([]);
  const fetchData = async() =>{
    await axios.get("http://localhost:4000/StoryBooks")
    .then(response=>{
      console.log(response.data)
      setData(response.data);
    })
  }

  useEffect(() => {
      fetchData();
  }, [])
  
  return (
    <>
        {
          data.map((item,index)=>(
            <div data-testid = "dataTest" key={index}>
              <h1>{item.name}</h1> - {item.author}
            </div>
          ))
        }
    </>
  )
}

export default Data