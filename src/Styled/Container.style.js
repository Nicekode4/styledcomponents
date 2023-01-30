import styled from "styled-components"

export const Container = styled.section`
background-color: ${probs => probs.color};
font-size: 25px;
h1{
    color: #D97852;
}
`

console.log(probs => probs.color)