import { Navigate } from 'react-router-dom'

import HomePage from '../../pages/HomePage'

export default function HomePageValidationToken() {
  if (localStorage.getItem('token')) {
    return <Navigate to="/notes" />
  }

  return <HomePage />
}
