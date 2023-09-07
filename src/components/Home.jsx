export default function Home() {
  return (
    <section
      id="home"
      className="flex w-full flex-col items-center justify-end"
    >
      <div className="relative h-40 w-40 rounded-full">
        <div className="h-full w-full overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-red-700 p-0.5 ">
          <div className="h-full w-full rounded-full bg-gray-800"></div>
        </div>
        <img
          src="portrait.jpg"
          alt="Mandy Llagas's portrait"
          className="absolute left-0 top-0 w-full rounded-full p-1"
        />
      </div>
      <h1 className="mt-2 text-3xl font-bold  text-amber-500">Mandy Llagas</h1>
      <p className="mb-5 mt-1 text-lg text-gray-300">Software Engineer</p>
      <a
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="flex animate-beat cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 px-6 py-3 text-white  transition-all"
      >
        <img src="open.svg" alt="" className="h-5 w-5 " />
        Resume
      </a>
    </section>
  );
}
