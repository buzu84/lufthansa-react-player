import React, { useState } from 'react'
import { useInput } from '../../core/hooks/useInput';

import { Normal } from '../Input.stories';
import { Default } from '../Button.stories';

export const Form: React.FC = () => {
  const [name, onChangeName, onBlurName, nameError] = useInput("", (value: string) => {
    if (!value || value.length < 5 || !value.match(/(?!^\d+$)^.+$/)) {
      return "Imię powinna składać się z min. 5 znaków!"
    }
    return ""
  })
  
  const [email, onChangeEmail, onBlurEmail, emailError] = useInput("", (value: string) => {
    if (!value || !value.match(/\S+@\S+\.\S+/)) {
      return "Wpisz poprawny email!"
    }
    return ""
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && email) {
      if(!nameError && !emailError) {
        console.log('walidacja pomyslna')
        console.log('emituję stan formularza na submit: ', name, email)
      }
    } else {
      alert('Wpisz cokolwiek!')
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vw-80 h-auto">
      <form className="w-50">
        <Normal name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={onChangeName}
          onBlur={onBlurName} />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {nameError}
        </span>
        <Normal name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail} />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {emailError}
        </span>

        <Default type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}



