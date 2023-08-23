export default function NavItem({ link }) {
  return (
    <li>
      <a href={`${link.to}`} className="text-base transition-colors hover:text-amber-500">
        {link.title}
      </a>
    </li>
  );
}
