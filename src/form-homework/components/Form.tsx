import React, { useEffect, useState, useRef } from 'react'
import { useInput } from '../../core/hooks/useInput';
import { useFocus } from '../../core/hooks/useFocus';

import { Disabled, Normal } from '../Input.stories';
import { Hover, Default } from '../Button.stories';

interface ValidationErrors {
  [fieldName: string]: Error[] | null;
}

export const Form: React.FC = () => {
  // const [formState, setFormState] = useInput({
  // });
  const [errors, setErrors] = useState<string[]>([]);

  const [Name, onChangeName, setName] = useInput("")
  const [Email, onChangeEmail, setEmail] = useInput("")
  const inputRef = useFocus()

  // const handleInputChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value
  //   });
  // }

  // const myErrorRef = useRef(null);

  // jesli sa bledy i je renderuje to smooth scroll do niego:
  // useEffect(() => {
  //   window.scrollTo({
  //     top: myErrorRef.current.offsetTop + myErrorRef.current.clientHeight,
  //     behavior: 'smooth'
  //   });
  // }, [errors]);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors([]);
    const validationErrors = validate();
    if (validationErrors.length !== 0) {
      setErrors(validationErrors);
    } else {
      // zrob cos po walidacji
      console.log('walidacja pomyslna')
      console.log('emituję stan formularza na submit: ', Name, Email)
    }
  };

  const validate = () => {
    let validationErrors: string[] = [];
    console.log('tu walidujesz i wypychasz błędy')
    const letters = /(?!^\d+$)^.+$/;
    const regEmail = /\S+@\S+\.\S+/;
    if (!Name || Name.length < 5 || !Name.match(letters)) {
      validationErrors.push("Imię powinna składać się z min. 5 znaków!");
    }
    if (!Email || !Email.match(regEmail)) {
      validationErrors.push("Wpisz poprawny email!");
    }
    return validationErrors;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vw-80 h-auto">
      <form className="w-50">
        {Name}
        <Normal name="name"
          id="name"
          placeholder="name"
          value={Name}
          onChange={onChangeName}
          onBlur={() => { console.log('blur') }} />
        {Email}
        <Normal name="email"
          id="email"
          placeholder="email"
          value={Email}
          onChange={onChangeEmail}
          onBlur={() => { console.log('blur') }} />

        <Default type="submit" onClick={handleSubmit} />
        <ul className="">
          {errors.map((error, index) => {
            return (
              <li style={{ color: "red", fontWeight: "bold" }} key={index}>
                {error}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}



