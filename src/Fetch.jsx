import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Poster from './Poster'
const url = 'http://localhost:4000/poster'

function Fetch() {
    const [poster, setPoster] = useState([])
    
useEffect(() => {
    const getPosters = async () => {
const response = await axios.get(url)
try {
  if (response.data) {
    
    setPoster(response.data)
    
    
  }
} catch (error) {
  console.log(error);
}

    };
          getPosters()
    
}, [])
let array = []
  for (let i = 0; i < 10; i++) {
       const element = poster[i]
       array.push(element)
      
   }
     for (var index = 0; index < array.length; i++) {
          const genre = element.genres[index]
          console.log(genre.title);
      } 

  return (
    <>
    
    
    

    
    <Poster 
    imgsrc={"https://info.kinorevuen.dk/wp-content/uploads/2021/02/species-2.jpg"}
    title="title"
    description="Desc"
    genre="genre"
    />
    </>
  )
}

export default Fetch