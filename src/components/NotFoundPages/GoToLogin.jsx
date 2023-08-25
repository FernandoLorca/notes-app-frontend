import { Link } from 'react-router-dom'

import { Chip } from '@nextui-org/react'

export default function GoToLogin({ text, linkText, link }) {
  return (
    <div>
      <Chip size="lg">
        {text}{' '}
        <Link
          to={link}
          className="text-blue-600 hover:opacity-75 transition-opacity ease-in"
        >
          {linkText}
        </Link>
      </Chip>
    </div>
  )
}
