export default function NoteCardTitle({ title }) {
  return (
    <p className="text-md font-bold mr-10">
      <span className="text-lg">🗒️ {title}</span>
    </p>
  );
}
