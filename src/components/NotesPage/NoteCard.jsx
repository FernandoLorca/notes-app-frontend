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

export default function NoteCard() {
  return (
    <Card className="w-full flex justify-center">
      <CardHeader className="px-5 flex items-start justify-between">
        <p className="text-md font-bold mr-10">
          <span className="text-lg">🗒️ Título de nota</span>
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
          >
            <HiTrash className="text-sm" />
          </Button>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id
          dignissimos, quo similique veniam quos ducimus ratione sit repellat,
          rem illum laboriosam aliquam, molestias excepturi blanditiis maiores
          assumenda at totam nam! Deleniti odio quidem placeat recusandae et
          impedit, numquam eius dolorem doloribus iste magni natus harum ea
          dolore necessitatibus temporibus quos? Voluptatem maiores est
          molestias provident! Eius laboriosam voluptatem odit saepe labore
          laborum fuga praesentium, recusandae, illo esse expedita deserunt sint
          adipisci pariatur? Fuga nulla nisi at distinctio, placeat natus, quasi
          id eius nemo iste eos adipisci, modi tenetur temporibus pariatur! Quis
          corporis sunt magnam magni cum non tempora incidunt!
        </p>
        <p className="text-xs font-light text-default-500">dsdsd</p>
      </CardBody>
    </Card>
  );
}
