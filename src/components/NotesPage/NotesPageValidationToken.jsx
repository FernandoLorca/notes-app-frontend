import { useContext } from 'react'
import { RegisterLoginContext } from '../../contexts/ApiConnectionsContext/RegisterLoginContext'

import NotesPage from '../../pages/NotesPage'
import NotFoundPage from '../../pages/NotFoundPage'

export default function NotesPageValidationToken() {
  const { user } = useContext(RegisterLoginContext)

  if ([user].length > 0) {
    return <NotesPage />
  }

  return <NotFoundPage />
}
