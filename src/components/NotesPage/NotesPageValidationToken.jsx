import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import NotesPage from '../../pages/NotesPage';

export default function NotesPageValidationToken() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      return;
    }

    const authValidation = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/v1/users/auth', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const resData = await res.json();

        setData(resData);
      } catch (error) {
        console.error(error);
      }
    };

    authValidation();
  }, [token]);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (
    typeof data === 'object' &&
    data.ok === true &&
    data.message === 'Token is valid'
  ) {
    return <NotesPage />;
  }
}
