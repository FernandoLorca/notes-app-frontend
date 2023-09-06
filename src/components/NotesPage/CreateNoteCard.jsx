import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { Link, Button, Input, Textarea } from '@nextui-org/react';
import { HiTrash, HiPencilAlt, HiCheck, HiX } from 'react-icons/hi';

export default function CreateNoteCard() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-2xl w-full flex justify-center">
        <CardHeader className="p-3 flex items-center justify-between">
          <Input
            label="Title"
            size="sm"
            className="mr-3"
          />
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
            <Button
              isIconOnly
              color={`danger`}
              size="sm"
              radius="full"
            >
              <HiX className={`text-sm text-white`} />
              <HiCheck className="text-sm text-gray-900 hidden" />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-3">
          <Textarea
            label="Content of the note"
            labelPlacement="inside"
            className="max-w-full -mb-1 -mt-3"
          />
        </CardBody>
      </Card>
    </div>
  );
}
