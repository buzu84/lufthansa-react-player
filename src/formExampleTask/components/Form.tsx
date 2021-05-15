import React, { useEffect, useState } from 'react'

import { Track } from "../../model/Search";
import { useInput } from "../../core/hooks/useInput";
import { useFocus } from "../../core/hooks/useFocus";

interface ValidationErrors {
  [fieldName: string]: Error[] | null;
}

export const Form: React.FC = () => {
  // const [formState, setFormState] = useInput({
  // });
  const [errors, setErrors] = useState([]);

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


  const handleSubmit = () => {
    // e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length !== 0) {
      setErrors(validationErrors);
    } else {
      // zrob cos po walidacji
      console.log('walidacja pomyslna')
    }
  };

  const validate = () => {
    const validationErrors: [] = [];
    console.log('validate odpalone')
    return validationErrors;
  }

  return (
    <form>
      {Name}
      <input name="name"
        ref={inputRef}
        id="name"
        placeholder="name"
        value={Name}
        onChange={onChangeName} />
      {Email}
      <input name="email"
        id="email"
        placeholder="email"
        value={Email}
        onChange={onChangeEmail} />
    </form>
  );
}



