import GoToLogin from '../components/NotFoundPages/GoToLogin'

export default function NotFoundPage() {
  const token = localStorage.getItem('token')

  return (
    <section className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl">Page not found</p>
      </div>
      <div className="mt-8">
        <GoToLogin
          text={token ? 'Go to your notes' : "Maybe you wan't to"}
          linkText={token ? 'notes' : 'register'}
          link={token ? '/notes' : '/'}
        />
      </div>
    </section>
  )
}
