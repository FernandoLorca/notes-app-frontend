import { createContext, useContext } from 'react'
import { RegisterLoginContext } from './RegisterLoginContext'

export const NotesApiConnectContext = createContext()

export default function NotesApiConnectContextProvider({ children }) {
  const { user } = useContext(RegisterLoginContext)
  const getNotes = async () => {}

  return (
    <NotesApiConnectContext.Provider value={{}}>
      {children}
    </NotesApiConnectContext.Provider>
  )
}
