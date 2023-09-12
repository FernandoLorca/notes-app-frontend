import { Link, Button } from '@nextui-org/react';
import { HiTrash, HiPencilAlt } from 'react-icons/hi';
import { useContext } from 'react';

import { DeleteNoteNoticeContext } from '../../contexts/NotePageContext/DeleteNoteNoticeProvider';
import { NotesApiFetchsContext } from '../../contexts/NotePageContext/NotesApiFetchsProvider';

export default function NoteCardLinks({
  token,
  userName,
  noteId,
  title,
  content,
}) {
  const { setDeletedNote } = useContext(DeleteNoteNoticeContext);
  const { setEditNoteState, setNoteId, handleEditNoteValues } = useContext(
    NotesApiFetchsContext
  );

  async function deleteNote() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${userName}/notes/${noteId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      if (data.ok === true) {
        setDeletedNote(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex gap-3">
      <Link>
        <Button
          isIconOnly
          color="warning"
          size="sm"
          radius="full"
          onClick={async () => {
            setEditNoteState({
              class: 'block',
              state: true,
            });
            setNoteId(noteId);
            handleEditNoteValues(title, content);
          }}
        >
          <HiPencilAlt className="text-sm text-white" />
        </Button>
      </Link>
      <Button
        isIconOnly
        color="danger"
        size="sm"
        radius="full"
        onClick={async () => await deleteNote()}
      >
        <HiTrash className="text-sm" />
      </Button>
    </div>
  );
}
