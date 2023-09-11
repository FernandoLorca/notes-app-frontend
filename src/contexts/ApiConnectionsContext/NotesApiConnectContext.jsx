import { createContext } from 'react';

export const NotesApiConnectContext = createContext();

export default function NotesApiConnectContextProvider({ children }) {
  return (
    <NotesApiConnectContext.Provider value={{}}>
      {children}
    </NotesApiConnectContext.Provider>
  );
}
