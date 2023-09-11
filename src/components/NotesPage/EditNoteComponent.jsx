import { useContext } from 'react';

import { NotesApiFetchsContext } from '../../contexts/NotePageContext/NotesApiFetchsProvider';

import EditNoteCard from './EditNoteCard';

export default function CreateNote({ notes }) {
  const { editNoteState } = useContext(NotesApiFetchsContext);

  return (
    <div className={`relative -top-5 ${editNoteState.class}`}>
      <div className="fixed backdrop-blur w-screen h-screen z-20"></div>
      <div className="absolute z-30 pt-2 px-2 md:p-0 md:mt-10 w-full">
        <EditNoteCard notes={notes} />
      </div>
    </div>
  );
}
