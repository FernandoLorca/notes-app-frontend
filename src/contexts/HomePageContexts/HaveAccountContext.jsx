import { createContext, useState } from 'react'

export const HaveAccountContext = createContext()

export default function HaveAccountProvider({ children }) {
  const [login, setLogin] = useState(false)
  const loginState = () => setLogin(!login)

  return (
    <HaveAccountContext.Provider value={{ login, loginState }}>
      {children}
    </HaveAccountContext.Provider>
  )
}
