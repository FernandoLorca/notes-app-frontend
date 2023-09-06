import { Chip } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from '../components/NotesPage/NoteCard';

export default function NotesPage() {
  const [user, setUser] = useState({});
  const [notesVerify, setNotesVerify] = useState({
    ok: false,
    message: 'You have no notes yet',
  });
  const token = localStorage.getItem('token');

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
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const userId = user.user?.id;
  const userName = user.user?.name.split(' ').join('').toLowerCase();

  async function getNotes() {
    try {
      await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${userId}`,
        {
          method: 'GET',
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

  useEffect(() => {
    if (user.user !== undefined) getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notesVerify]);

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
        ''
      )}
      <div className="m-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3"></div>
    </section>
  );
}
