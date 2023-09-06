'use client';
import {
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from '@nextui-org/react';
import { HiTrash, HiPencilAlt } from 'react-icons/hi';

export default function NoteCard({ title, content, date, userId }) {
  const fomattedDate = date.split('T')[0].split('-').reverse().join('/');

  return (
    <Card className="w-full flex justify-center">
      <CardHeader className="px-5 flex items-start justify-between">
        <p className="text-md font-bold mr-10">
          <span className="text-lg">🗒️ {title}</span>
        </p>
        <div className="flex gap-3">
          <Link>
            <Button
              isIconOnly
              color="warning"
              size="sm"
              radius="full"
            >
              <HiPencilAlt className="text-sm text-white" />
            </Button>
          </Link>
          <Button
            isIconOnly
            color="danger"
            size="sm"
            radius="full"
            onClick={() => console.log('delete')}
          >
            <HiTrash className="text-sm" />
          </Button>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mb-2">{content}</p>
        <p className="text-xs font-light text-default-500">{fomattedDate}</p>
      </CardBody>
    </Card>
  );
}
