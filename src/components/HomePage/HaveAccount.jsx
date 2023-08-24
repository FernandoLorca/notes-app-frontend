import { Link } from '@nextui-org/link'

export default function HaveAccount({ login, loginState }) {
  return (
    <p className="text-sm text-center py-2">
      {login ? "Don't have an account? " : 'Already have an account? '}
      <Link
        href="#"
        className="text-sm"
        onPress={() => loginState()}
      >
        {login ? 'Register' : 'Login'}
      </Link>
    </p>
  )
}
