import { useContext } from 'react';

import { NotesApiFetchsContext } from '../../contexts/NotePageContext/NotesApiFetchsProvider';

import CreateNoteCard from './CreateNoteCard';

export default function CreateNote() {
  const { newNoteState, setNewNoteState } = useContext(NotesApiFetchsContext);

  return (
    <div className={`relative -top-5 ${newNoteState}`}>
      <div
        className="fixed backdrop-blur w-screen h-screen z-20 cursor-pointer"
        onClick={() => setNewNoteState('hidden')}
      ></div>
      <div className="absolute z-30 pt-2 px-2 md:p-0 md:mt-10 w-full">
        <CreateNoteCard />
      </div>
    </div>
  );
}
