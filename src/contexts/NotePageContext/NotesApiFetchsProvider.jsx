import { createContext, useState } from 'react';

export const NotesApiFetchsContext = createContext();

export default function NotesApiFetchsProvider({ children }) {
  const [newNoteState, setNewNoteState] = useState('hidden');

  async function createNote(newNote) {
    console.log(newNote);
    setNewNoteState('hidden');

    // try {

    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <NotesApiFetchsContext.Provider
      value={{ createNote, newNoteState, setNewNoteState }}
    >
      {children}
    </NotesApiFetchsContext.Provider>
  );
}
