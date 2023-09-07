export default function NoteCardBody({ content, date }) {
  const fomattedDate = date.split('T')[0].split('-').reverse().join('/');

  return (
    <>
      <p className="mb-2">{content}</p>
      <p className="text-xs font-light text-default-500">{fomattedDate}</p>
    </>
  );
}
