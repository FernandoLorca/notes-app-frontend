import { Link, Button } from '@nextui-org/react';
import { HiTrash, HiPencilAlt } from 'react-icons/hi';
import { useContext } from 'react';

import { DeleteNoteNoticeContext } from '../../contexts/NotePageContext/DeleteNoteNoticeProvider';

export default function NoteCardLinks({ token, userName, noteId }) {
  const { setDeletedNote } = useContext(DeleteNoteNoticeContext);

  async function deleteNote() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${noteId}`,
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

  async function editNote() {
    try {
      await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${noteId}`,
        {
          method: 'PUT',
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

  return (
    <div className="flex gap-3">
      <Link>
        <Button
          isIconOnly
          color="warning"
          size="sm"
          radius="full"
          onClick={async () => console.log('click')}
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
