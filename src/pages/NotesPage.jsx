import { Chip } from '@nextui-org/react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DeleteNoteNoticeContext } from '../contexts/NotePageContext/DeleteNoteNoticeProvider';
import { NotesApiFetchsContext } from '../contexts/NotePageContext/NotesApiFetchsProvider';

import BasicButton from '../components/BasicComponents/Buttons/BasicButton';
import NoteCard from '../components/NotesPage/NoteCard';
import CreateNoteComponent from '../components/NotesPage/CreateNoteComponent';

export default function NotesPage() {
  const { deletedNote, setDeletedNote } = useContext(DeleteNoteNoticeContext);
  const { newNoteState, setNewNoteState, setUserName } = useContext(
    NotesApiFetchsContext
  );

  const token = localStorage.getItem('token');
  const [user, setUser] = useState([]);
  const [notes, setNotes] = useState([]);
  const [notesVerify, setNotesVerify] = useState({
    ok: false,
    message: 'You have no notes yet',
  });

  async function getUser() {
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/auth', {
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
        `http://localhost:3000/api/v1/users/${userName}/notes`,
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

  useEffect(() => {
    if ((typeof user !== Array && user.ok === true) || deletedNote === true) {
      getNotes();
      setDeletedNote(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, deletedNote, newNoteState]);

  return (
    <section>
      {notesVerify.ok === false ? (
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl mt-10 font-bold text-blue-600">
            {notesVerify.message}
          </h1>
          <Chip size="lg">
            Create your first one{' '}
            {
              <Link className="text-blue-600 hover:opacity-75 transition-opacity ease-in">
                here
              </Link>
            }
          </Chip>
        </div>
      ) : (
        <>
          <CreateNoteComponent />
          <div className="flex justify-center mt-5">
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
