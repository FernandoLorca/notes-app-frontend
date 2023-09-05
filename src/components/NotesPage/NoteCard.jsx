'use client'
import {
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from '@nextui-org/react'
import { HiTrash, HiPencilAlt } from 'react-icons/hi'

export default function NoteCard() {
  return (
    <Card className="w-full flex justify-center">
      <CardHeader className="px-5 flex items-start justify-between">
        <p className="text-md font-bold mr-10">
          <span className="text-lg">🗒️</span>
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
        <p className="mb-2"></p>
        <p className="text-xs font-light text-default-500">dsdsd</p>
      </CardBody>
    </Card>
  )
}
