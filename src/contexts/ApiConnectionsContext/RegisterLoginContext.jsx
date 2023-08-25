import { createContext, useContext, useState } from 'react'

import { InputHandlersContext } from '../HomePageContexts/InputsHandlersContext'

export const RegisterLoginContext = createContext()

export default function RegisterLoginContextProvider({ children }) {
  const { registerInputsStates } = useContext(InputHandlersContext)

  async function registerUser() {
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: registerInputsStates.inputName.value,
          email: registerInputsStates.inputEmail.value,
          password: registerInputsStates.inputPassword.value,
        }),
      })
      const data = await res.json()

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async function loginUser() {
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: registerInputsStates.inputEmail.value,
          password: registerInputsStates.inputPassword.value,
        }),
      })
      const data = await res.json()

      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RegisterLoginContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </RegisterLoginContext.Provider>
  )
}
