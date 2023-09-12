import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import HomePage from '../../pages/HomePage';

export default function HomePageValidationToken() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      return;
    }

    const authValidation = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
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
    return <HomePage />;
  }

  if (typeof data === 'object' && data.ok === false) {
    return <HomePage />;
  }

  if (
    typeof data === 'object' &&
    data.ok === true &&
    data.message === 'Token is valid'
  ) {
    return <Navigate to="/notes" />;
  }
}
