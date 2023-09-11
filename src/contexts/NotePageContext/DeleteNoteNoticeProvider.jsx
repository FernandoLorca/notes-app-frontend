import { createContext, useState } from 'react';

export const DeleteNoteNoticeContext = createContext();

export default function DeleteNoteNoticeProvider({ children }) {
  const [deletedNote, setDeletedNote] = useState(false);

  return (
    <DeleteNoteNoticeContext.Provider
      value={{
        deletedNote,
        setDeletedNote,
      }}
    >
      {children}
    </DeleteNoteNoticeContext.Provider>
  );
}
