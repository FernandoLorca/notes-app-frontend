import { useContext } from 'react';

import { NotesApiFetchsContext } from '../../contexts/NotePageContext/NotesApiFetchsProvider';

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';
import { HiCheck, HiX } from 'react-icons/hi';

export default function CreateNoteCard() {
  const { createNote, newNote, setNewNote, setNewNoteState } = useContext(
    NotesApiFetchsContext
  );

  return (
    <div className="flex justify-center">
      <Card className="max-w-2xl w-full flex justify-center">
        <CardHeader className="p-3 flex items-center justify-between">
          <Input
            isClearable
            onClear={() => setNewNote({ ...newNote, title: '' })}
            placeholder="Title"
            size="md"
            className="mr-3"
            value={newNote.title}
            onChange={e =>
              setNewNote({
                ...newNote,
                title: e.target.value,
              })
            }
          />
          <div className="flex gap-3">
            <Button
              isIconOnly
              color={
                newNote.title.length > 0 && newNote.content.length > 0
                  ? 'success'
                  : 'danger'
              }
              size="sm"
              radius="full"
              onClick={async () => {
                if (
                  (newNote.title.length === 0 &&
                    newNote.content.length === 0) ||
                  (newNote.title.length !== 0 &&
                    newNote.content.length === 0) ||
                  (newNote.title.length === 0 && newNote.content.length !== 0)
                ) {
                  return setNewNoteState({
                    class: 'hidden',
                    state: false,
                  });
                } else {
                  await createNote();
                  setNewNoteState({
                    class: 'hidden',
                    state: false,
                  });
                }
              }}
            >
              <HiX
                className={`text-sm text-white ${
                  newNote.title.length > 0 && newNote.content.length > 0
                    ? 'hidden'
                    : ''
                }`}
              />
              <HiCheck
                className={`text-sm text-gray-900 ${
                  newNote.title.length > 0 && newNote.content.length > 0
                    ? ''
                    : 'hidden'
                }`}
              />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-3">
          <Textarea
            placeholder="Note content"
            className="max-w-full -mb-1 -mt-3"
            value={newNote.content}
            onChange={e =>
              setNewNote({
                ...newNote,
                content: e.target.value,
              })
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}
