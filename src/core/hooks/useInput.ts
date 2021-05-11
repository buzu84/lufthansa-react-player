import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

export const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);

  const handler = useCallback((e) => {
    e.preventDefault();
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};


