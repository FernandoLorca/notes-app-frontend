import { Link, Button } from '@nextui-org/react';
import { HiTrash, HiPencilAlt } from 'react-icons/hi';

export default function NoteCardLinks({ token, userName, noteId }) {
  async function deleteNote() {
    try {
      await fetch(
        `http://localhost:3000/api/v1/users/${userName}/notes/${noteId}`,
        {
          method: 'DELETE',
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
