import { createContext, useContext, useState } from 'react'

import { InputHandlersContext } from '../HomePageContexts/InputsHandlersContext'

export const RegisterLoginContext = createContext()

export default function RegisterLoginContextProvider({ children }) {
  const { registerInputsStates } = useContext(InputHandlersContext)
  const [userData, setUserData] = useState([])

  async function registerUser() {
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
    setUserData(data)
    return data
  }

  return (
    <RegisterLoginContext.Provider value={{ registerUser, userData }}>
      {children}
    </RegisterLoginContext.Provider>
  )
}
