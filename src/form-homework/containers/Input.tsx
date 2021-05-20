import styled, { css } from 'styled-components'


interface Props {
    disabled: boolean,
    type: string,
    placeholder: string
    value: string,
    required: boolean,
    onChange: () => void
}


export const Input = styled.input<Props>`
    padding:15px;
    border-radius:15px;
    border: 1px solid tomato;
    outline: none;
    
    ${props => props.disabled === true && css`
    background: tomato;
    color: white;
  `}
`