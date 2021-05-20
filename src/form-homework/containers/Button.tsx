import styled, { css } from 'styled-components'


interface Props {
    disabled: boolean,
    type: string,
    placeholder: string
    value: string,
    required: boolean
}


export const Submit = styled.input<Props>`
    padding:15px;
    border-radius:15px;
    border: 1px solid tomato;
    letter-spacing: 1.5px;
    opacity: 1;
    transition: 0.6s;
    ${props => props.disabled === true && css`
    background: tomato;
    color: white;
    border: 1px solid gray;
    opacity: 0.8;
  `}
`