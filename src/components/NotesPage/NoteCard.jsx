import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import NoteCardTitle from './NoteCardTitle';
import NoteCardLinks from './NoteCardLinks';
import NoteCardBody from './NoteCardBody';

export default function NoteCard({
  title,
  content,
  date,
  token,
  userName,
  noteId,
}) {
  return (
    <Card className="w-full flex justify-center">
      <CardHeader className="px-5 flex items-start justify-between">
        <NoteCardTitle title={title} />
        <NoteCardLinks
          userName={userName}
          token={token}
          noteId={noteId}
          title={title}
          content={content}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <NoteCardBody
          content={content}
          date={date}
        />
      </CardBody>
    </Card>
  );
}
