export default function NavItem({ link }) {
  return (
    <a
      href={`${link.to}`}
      className="text-base transition-colors hover:text-amber-500"
    >
      <li>{link.title}</li>
    </a>
  );
}
