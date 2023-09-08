export default function NoteCardTitle({ title }) {
  return (
    <p className="text-md font-bold mr-10 overflow-hidden">
      <span className="text-lg break-words">🗒️ {title}</span>
    </p>
  );
}
