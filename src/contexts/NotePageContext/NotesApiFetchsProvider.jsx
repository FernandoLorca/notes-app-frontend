import { createContext, useState } from 'react';

export const NotesApiFetchsContext = createContext();

export default function NotesApiFetchsProvider({ children }) {
  const [newNoteState, setNewNoteState] = useState({
    class: 'hidden',
    state: false,
  });
  const [editNoteState, setEditNoteState] = useState({
    class: 'hidden',
    state: false,
  });
  const [userName, setUserName] = useState({});
  const [noteId, setNoteId] = useState('');
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  });

  const token = localStorage.getItem('token');

  async function createNote() {
    try {
      await fetch(`http://localhost:3000/api/v1/users/${userName}/notes`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newNote),
      });

      setNewNote({
        title: '',
        content: '',
      });
      setNewNoteState('hidden');
    } catch (error) {
      console.error(error);
    }
  }

  async function editNote() {
    try {
      await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${noteId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NotesApiFetchsContext.Provider
      value={{
        createNote,
        setNewNote,
        newNoteState,
        setNewNoteState,
        setUserName,
        newNote,
        editNote,
        editNoteState,
        setEditNoteState,
        setNoteId,
      }}
    >
      {children}
    </NotesApiFetchsContext.Provider>
  );
}
