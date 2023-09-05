import { useState, useEffect } from 'react';
import NoteCard from '../components/NotesPage/NoteCard';

export default function NotesPage() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token');

  const getUser = async () => {
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
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log(user);
  return (
    <div className="m-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}
