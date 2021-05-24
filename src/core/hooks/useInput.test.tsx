import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import TestRenderer from "react-test-renderer"
import { useInput } from './useInput'
const { act } = TestRenderer


describe('useInput hook', () => {

  const setup = () => {
    const { result } = renderHook(() => useInput("Magd", (value: string) => {
      if (!value || value.length < 5 || !value.match(/(?!^\d+$)^.+$/)) {
        return "Imię powinna składać się z min. 5 znaków!"
      }
      return ""
    }))
    act(() => { 
      // result.current[2]
    })
    const [value, onChange, onBlur, error] = result.current;

    return {
      value, onChange, onBlur, error
    }
  }

  test('gets item from storage by key', () => {
    const { value, onChange, onBlur, error } = setup()
    // expect(onBlur).toEqual(0)
    expect(error).toEqual('aa')
  })

})
