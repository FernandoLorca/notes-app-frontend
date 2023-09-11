import { HiUser } from 'react-icons/hi';
import { Button, Listbox, ListboxItem } from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogOutComponent() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed flex bottom-5 right-5 z-30">
      <Listbox
        aria-label="Log out"
        className={`bg-zinc-950 mr-2 rounded-xl ${!open ? 'hidden' : 'block'}`}
      >
        <ListboxItem
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}
        >
          Log out
        </ListboxItem>
      </Listbox>
      <Button
        isIconOnly
        color="primary"
        variant="shadow"
        onClick={() => setOpen(!open)}
      >
        <HiUser />
      </Button>
    </div>
  );
}
