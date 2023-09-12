import { Chip } from '@nextui-org/react';
import { useState, useEffect, useContext } from 'react';

import { DeleteNoteNoticeContext } from '../contexts/NotePageContext/DeleteNoteNoticeProvider';
import { NotesApiFetchsContext } from '../contexts/NotePageContext/NotesApiFetchsProvider';

import BasicButton from '../components/BasicComponents/Buttons/BasicButton';
import NoteCard from '../components/NotesPage/NoteCard';
import CreateNoteComponent from '../components/NotesPage/CreateNoteComponent';
import EditNoteComponent from '../components/NotesPage/EditNoteComponent';
import LogOutComponent from '../components/HomePage/LogOutComponent';

export default function NotesPage() {
  const { deletedNote, setDeletedNote } = useContext(DeleteNoteNoticeContext);
  const {
    newNoteState,
    setNewNoteState,
    setUserName,
    editeNoteCheck,
    setEditeNoteCheck,
  } = useContext(NotesApiFetchsContext);

  const token = localStorage.getItem('token');
  const [user, setUser] = useState([]);
  const [notes, setNotes] = useState([]);
  const [notesVerify, setNotesVerify] = useState({
    ok: false,
    message: 'You have no notes yet',
  });

  async function getUser() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setUser(data);
      setUserName(data.user?.name.split(' ').join('').toLowerCase());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const userName = user.user?.name.split(' ').join('').toLowerCase();

  async function getNotes() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${userName}/notes`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const notes = await res.json();

      if (notes.ok === false) {
        setNotesVerify({
          ok: false,
          message: 'You have no notes yet',
        });
      } else {
        setNotesVerify({
          ok: true,
        });
        setNotes(notes);
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(token.length);

  useEffect(() => {
    if (
      token.length > 5 ||
      (typeof user !== Array && user.ok === true && Array.isArray(notes)) ||
      deletedNote === true ||
      editeNoteCheck === true
    ) {
      getNotes();
      setDeletedNote(false);
      setEditeNoteCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, deletedNote, newNoteState, editeNoteCheck, token]);

  return (
    <section>
      <CreateNoteComponent />
      {notesVerify.ok === false ? (
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl mt-10 font-bold text-blue-600">
            {notesVerify.message}
          </h1>
          <Chip size="lg">
            Create your first one{' '}
            {
              <button
                className="text-blue-600 hover:opacity-75 transition-opacity ease-in"
                onClick={() =>
                  setNewNoteState({
                    class: 'block',
                    state: true,
                  })
                }
              >
                here
              </button>
            }
          </Chip>
        </div>
      ) : (
        <>
          <CreateNoteComponent />
          <EditNoteComponent notes={notes} />
          <LogOutComponent />
          <div className="flex justify-center pt-5">
            <BasicButton
              text="Create note"
              onclick={() =>
                setNewNoteState({
                  class: 'block',
                  state: true,
                })
              }
            />
          </div>
          <div className="m-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {notes.notes.map(note => (
              <div key={note.id}>
                <NoteCard
                  title={note.title}
                  content={note.content}
                  date={note.createdAt}
                  token={token}
                  userName={userName}
                  noteId={note.id}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
