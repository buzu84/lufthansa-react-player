
- stworzyc komponent 
    - button lub lista lub input

- stworzyc story dla niego
    - min 2 warianty - primary i secondary

- ostylować ze styled components
    - min 2 warianty wygladu z props

- stworzyc formularz
    - z komponentami dekorujacymi inputy
    - inputy ostylowane ze styled components
    - custom hook dla pol formularza, np.
    - const { inputProps } = useInput('default Value')
    - <input value={inputProps.value} onChange={inProps.onChange}>
    - <input {...inputProps}>
    - dodawanie do pola funkcji walidujacej
    - wyswietlanie bledu walidacji przy polu po opuszceniu pola (onBlur)
    - onSave = emituje wszystkie pola formularza jako obiekt (tylko kiedy nie ma błedów)
    - opcjonalnie testy inputa i hooka

- na osobnym Route w app