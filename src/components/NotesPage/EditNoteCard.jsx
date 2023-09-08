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
  const {
    editNote,
    newNote,
    setNewNote,
    setEditNoteState,
    noteToEdit,
    setNoteToEdit,
  } = useContext(NotesApiFetchsContext);

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
            value={noteToEdit.title}
            onChange={e =>
              setNoteToEdit({
                ...noteToEdit,
                title: e.target.value,
              })
            }
          />
          <div className="flex gap-3">
            <Button
              isIconOnly
              color="danger"
              size="sm"
              radius="full"
              onClick={() =>
                setEditNoteState({
                  class: 'hidden',
                  state: false,
                })
              }
            >
              <HiX className="text-sm text-white" />
            </Button>
            <Button
              isIconOnly
              color="success"
              size="sm"
              radius="full"
              onClick={async () => {
                await editNote(noteToEdit.title, noteToEdit.content);
                setEditNoteState({
                  class: 'hidden',
                  state: false,
                });
              }}
            >
              <HiCheck className="text-sm text-gray-900" />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-3">
          <Textarea
            placeholder="Note content"
            className="max-w-full -mb-1 -mt-3"
            value={noteToEdit.content}
            onChange={e =>
              setNoteToEdit({
                ...noteToEdit,
                content: e.target.value,
              })
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}
