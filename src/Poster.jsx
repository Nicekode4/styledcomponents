import React from 'react'
import { Button } from './Styled/Button.style'

function Poster(probs) {
  return (
    <div>
        <img src={probs.imgsrc} alt="Image" />
        <h2>{probs.title}</h2>
        <p>{probs.description}</p>
        <p>{probs.genre}</p>
        <Button>
            LÆS MERE
        </Button>
    </div>
  )
}

export default Poster