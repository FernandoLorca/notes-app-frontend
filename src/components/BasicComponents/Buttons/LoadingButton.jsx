import { Button } from '@nextui-org/button'

export default function NotesButton({ text, typeButton, color = 'primary' }) {
  return (
    <Button
      isLoading
      type={typeButton}
      color={color}
      variant="shadow"
    >
      {text}
    </Button>
  )
}
