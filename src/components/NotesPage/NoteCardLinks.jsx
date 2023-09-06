import { Link, Button } from '@nextui-org/react';
import { HiTrash, HiPencilAlt } from 'react-icons/hi';

export default function NoteCardLinks() {
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
        onClick={() => console.log('delete')}
      >
        <HiTrash className="text-sm" />
      </Button>
    </div>
  );
}
