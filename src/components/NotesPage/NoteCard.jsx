import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import NoteCardTitle from './NoteCardTitle';
import NoteCardLinks from './NoteCardLinks';
import NoteCardBody from './NoteCardBody';

export default function NoteCard({ title, content, date, userId }) {
  return (
    <Card className="w-full flex justify-center">
      <CardHeader className="px-5 flex items-start justify-between">
        <NoteCardTitle title={title} />
        <NoteCardLinks />
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
