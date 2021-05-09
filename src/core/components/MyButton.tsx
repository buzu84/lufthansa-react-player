import styled, { css } from 'styled-components'

{/* <MyButton primary={true} onClick={...}> <h1>...</h1> </MyButton> */ }

interface Props {
  primary: boolean
}

export const MyButton = styled.a<Props>`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem .5rem;
  text-align:center;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: black;
  border: 2px solid black;

  &:hover{
    color:hotpink;
    border: 2px solid red;
  }

  .placki{
    color: #bada55;
    font-weight:bold;
    font-size:2rem;
  }

  /* The GitHub button is a primary button
  * edit this to target it specifically! */

  ${props => props.primary === true && css`
    background: ${props.theme.primary.background};
    color: ${props.theme.primary.color};
  `}
`
