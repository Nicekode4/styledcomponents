import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Poster from './Poster'
import { Button } from './Styled/Button.style'
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
let array2 = []



console.log(array);

for (let i = 0; i <= 10; i++) {
  console.log(i);
  return (<Poster 
imgsrc={"https://info.kinorevuen.dk/wp-content/uploads/2021/02/species-2.jpg"}
title={i}
description="Desc"
genre="Genre"
/>)
 }
}

export default Fetch