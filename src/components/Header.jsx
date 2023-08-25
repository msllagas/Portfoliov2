import NavItem from "./NavItem";
import { useSidebar } from "../context/SidebarContext";
import SideNavItem from "./SideNavItem";
import { useEffect } from "react";

function Header() {
  const { isOpen, setIsOpen, links } = useSidebar();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style = "none";
  }, [isOpen]);

  return (
    <header className="fixed z-50 w-full transition-all">
      <nav className="ml-auto mr-auto flex h-14 items-center justify-between border-b border-b-gray-300 bg-gray-800 px-3 py-3 lg:w-[70%] ">
        <h1
          className=" text-secondary cursor-pointer md:text-3xl text-2xl font-bold text-amber-500"
          onClick={() => window.scrollTo(0, 0)}
        >
          M&Y
        </h1>
        <ul className="hidden gap-11 text-gray-300 md:flex">
          <li
            className="cursor-pointer text-base transition-colors hover:text-amber-500"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </li>
          {links.map((link) => (
            <NavItem link={link} key={link.id} />
          ))}
        </ul>
        <div className="hidden gap-5 md:flex">
          <a
            href="https://github.com/msllagas"
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            <svg
              stroke="currentColor"
              fill="#d1d5db"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors hover:fill-amber-500"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mandy-llagas-93081624b/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            <svg
              stroke="currentColor"
              fill="#d1d5db"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors hover:fill-amber-500"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
          </a>
        </div>
        <button
          className="w-6 font-bold md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={`${isOpen ? "close.svg" : "menu.svg"}`}
            alt={`${isOpen ? "close icon" : "menu icon"}`}
          />
        </button>
      </nav>
      <div
        className={`${
          isOpen
            ? "absolute z-40 h-screen w-screen bg-black/50 transition duration-300 md:hidden"
            : ""
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`fixed z-50 ml-auto flex h-screen w-64 max-w-[calc(100%-3rem)] flex-col justify-between bg-gray-700 opacity-100 duration-300 ${
          isOpen ? "right-0" : "right-[-100%]"
        }  text-gray-300 ease-in`}
      >
        <ul className="space-y-3 pt-4">
          <li
            className="cursor-pointer px-6 py-3 text-base transition-colors hover:text-amber-500 active:bg-gray-800"
            onClick={() => (window.scrollTo(0, 0), setIsOpen(false))}
          >
            Home
          </li>
          {links.map((link) => (
            <SideNavItem link={link} key={link.id} />
          ))}
        </ul>
        <div className="px-6 pb-28">
          <h2>Connect with me</h2>
          <div className="mt-3 flex gap-4">
            <a
              href="https://github.com/msllagas"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <svg
                stroke="currentColor"
                fill="#d1d5db"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors hover:fill-amber-500 active:fill-amber-500"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mandy-llagas-93081624b/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <svg
                stroke="currentColor"
                fill="#d1d5db"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors hover:fill-amber-500 active:fill-amber-500"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}

export default Header;
