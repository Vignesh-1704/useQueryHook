import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const NewAbout = () => {
    const {data} = useQuery('unique-name',() =>{
        return axios.get("http://localhost:4000/StoryBooks")
    })
  return (
    <>
        <h1>New About</h1>
        {
          data?.data.map((item,index)=>(
            <div key={index}>
              <h1>{item.name}</h1> - {item.author}
            </div>
          ))
        }
    </>
  )
}

export default NewAbout