import About from "./About";
import Home from "./Home";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className="flex justify-center">
      <div className="w-full lg:w-3/5">
        <div className="h-28"></div>
        <Home />
        <About />
        <Skills />
      </div>
    </main>
  );
}
