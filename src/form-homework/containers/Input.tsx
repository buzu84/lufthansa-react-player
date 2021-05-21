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
  padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
  outline: none;
  display: block;
    /* tu dowal props error true/false i na jego podstawie input w innym kolorze. */
    ${props => props.disabled === true && css`
    background: tomato;
    color: white;
  `}
`