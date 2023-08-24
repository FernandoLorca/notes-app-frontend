import HomePageForms from '../components/HomePage/HomePageForms'

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold py-5">
        Personal notes app
      </h1>
      <section className="px-5">
        <div className="flex justify-center mt-10 h-screen">
          <HomePageForms />
        </div>
      </section>
    </>
  )
}
