import { useState, useCallback } from "react";

export const useInput = (initValue = "", validate: (value: string) => string) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, []);

  const onBlur = (e: any) => {
    setError(validate(e.target.value))
  }

  return [ value, onChange, onBlur, error ]
}