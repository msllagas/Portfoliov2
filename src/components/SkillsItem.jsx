export default function SkillsItem({ skill }) {
  return (
    <div className="grid place-items-center p-4">
      <img
        src={`${skill.name}.svg`}
        alt={`${skill.name} logo`}
        className={`hover:drop-shadow-${skill.name} h-20 w-20 grayscale transition-all hover:grayscale-0`}
      />
    </div>
  );
}
