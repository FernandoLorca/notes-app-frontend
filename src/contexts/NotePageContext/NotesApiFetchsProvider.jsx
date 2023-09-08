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
  const [noteToEdit, setNoteToEdit] = useState({
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

  const handleEditNoteValues = (title, content) => {
    setNoteToEdit({
      title,
      content,
    });
  };

  async function editNote(title, content) {
    try {
      await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${noteId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            content,
          }),
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
        noteToEdit,
        setNoteToEdit,
        handleEditNoteValues,
      }}
    >
      {children}
    </NotesApiFetchsContext.Provider>
  );
}
