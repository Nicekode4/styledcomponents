import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import Poster from './Poster'
const url = 'http://localhost:4000/poster'

function Fetch() {
    const [poster, setPoster] = useState(null)
    
useEffect(() => {
    const getPosters = () => {
        axios.get(url).then((response) => {
            setPoster(response.data);
          })};
          getPosters()
          console.log(poster[0].genres[0].title);
}, [])



  return (
    <>
    {poster.map(item => (item,index)
    console.log(item)
    )}

    
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