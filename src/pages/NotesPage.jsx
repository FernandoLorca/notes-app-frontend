import { useContext } from 'react'
import { NotesApiConnectContext } from '../contexts/ApiConnectionsContext/NotesApiConnectContext'

import NoteCard from '../components/NotesPage/NoteCard'

export default function NotesPage() {
  const context = useContext(NotesApiConnectContext)

  return (
    <div>
      <NoteCard />
    </div>
  )
}
