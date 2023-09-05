import { useState, useEffect } from 'react';
import GoToLogin from '../components/NotFoundPages/GoToLogin';

export default function NotFoundPage() {
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
    return (
      <section className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <p className="text-2xl">Page not found</p>
        </div>
        <div className="mt-8">
          <GoToLogin
            text="Maybe you wan't to"
            linkText="register"
            link="/"
          />
        </div>
      </section>
    );
  }

  if (
    typeof data === 'object' &&
    data.ok === true &&
    data.message === 'Token is valid'
  ) {
    return (
      <section className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <p className="text-2xl">Page not found</p>
        </div>
        <div className="mt-8">
          <GoToLogin
            text="Maybe you want to go to your "
            linkText="notes"
            link="/notes"
          />
        </div>
      </section>
    );
  }
}
