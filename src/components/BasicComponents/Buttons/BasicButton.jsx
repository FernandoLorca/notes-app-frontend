import { Button } from '@nextui-org/button';

export default function NotesButton({
  text,
  typeButton,
  color = 'primary',
  onclick,
}) {
  return (
    <Button
      type={typeButton}
      color={color}
      variant="shadow"
      onClick={onclick}
    >
      {text}
    </Button>
  );
}
