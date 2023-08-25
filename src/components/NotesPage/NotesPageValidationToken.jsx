import NotesPage from '../../pages/NotesPage'
import NotFoundPage from '../../pages/NotFoundPage'

export default function NotesPageValidationToken() {
  if (localStorage.getItem('token')) {
    return <NotesPage />
  }

  return <NotFoundPage />
}
