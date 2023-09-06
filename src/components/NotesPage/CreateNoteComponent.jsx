import CreateNoteCard from './CreateNoteCard';

export default function CreateNote() {
  return (
    <div className="relative -top-5">
      <div className="fixed backdrop-blur w-screen h-screen z-20"></div>
      <div className="absolute z-30 pt-2 px-2 md:p-0 md:mt-10 w-full">
        <CreateNoteCard />
      </div>
    </div>
  );
}
