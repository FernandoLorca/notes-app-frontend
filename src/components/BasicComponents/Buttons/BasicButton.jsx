import { Button } from '@nextui-org/button';

export default function NotesButton({ text, typeButton, color = 'primary' }) {
  return (
    <Button
      type={typeButton}
      color={color}
      variant="shadow"
    >
      {text}
    </Button>
  );
}
