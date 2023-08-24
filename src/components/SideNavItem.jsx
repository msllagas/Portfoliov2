import { useSidebar } from "../context/SidebarContext";

export default function SideNavItem({ link }) {
  const { setIsOpen } = useSidebar();
  return (
    <a
      href={`${link.to}`}
      className="text-base transition-colors hover:text-amber-500"
    >
      <li
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 active:bg-gray-800"
      >
        {link.title}
      </li>
    </a>
  );
}
