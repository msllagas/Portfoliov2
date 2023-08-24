export default function Projects() {
  return (
    <section id="projects" className="px-5 text-gray-300 lg:px-0">
      <div className="h-14"></div>
      <h2 className="mt-2 text-2xl font-bold tracking-widest text-amber-500">
        Projects
      </h2>
      <div className="my-12 flex items-center justify-center gap-4">
        <img
          src="wrench.svg"
          alt="wrench logo bouncing"
          className="h-10 w-10 animate-bounce"
        />
        <p className="text-center text-xl md:text-2xl capitalize">working on it!</p>
      </div>
      <p>
        For now, why don&apos;t you click on my GitHub profile and look at some of my
        projects hmm?
      </p>
      <div className="h-14"></div>

    </section>
  );
}
