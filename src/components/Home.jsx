
export default function Home() {
  return (
    <section
    id="home"
    className="flex w-full flex-col items-center justify-end"
  >
    <div className="h-40 w-40 overflow-hidden rounded-full border-amber-500 border-2 p-1">
      <img
        src="portrait.jpg"
        alt="Mandy Llagas's portrait"
        className="w-full rounded-full"
      />
    </div>
    <h1 className="mt-2 text-3xl font-bold  text-amber-500">Mandy Llagas</h1>
    <p className="mb-5 mt-1 text-gray-300">Front-end Developer</p>
    <a
      href="resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="flex cursor-pointer items-center gap-2 rounded-xl bg-gray-300 px-6 py-3 text-sm transition-colors hover:bg-amber-500 animate-beat"
    >
      <img src="open-external.svg" alt="" className="h-5 w-5" />
      Resume
    </a>
  </section>
  )
}
