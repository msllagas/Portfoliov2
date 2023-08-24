export default function SkillsItem({ skill }) {
  const colors = {
    css : "hover:drop-shadow-css",
    html: "hover:drop-shadow-html",
    javascript: "hover:drop-shadow-javascript",
    java: "hover:drop-shadow-java",
    csharp: "hover:drop-shadow-csharp",
    tailwind: "hover:hover:hover:hover:drop-shadow-tailwind",
    bootstrap: "hover:drop-shadow-bootstrap",
    react: "hover:drop-shadow-react",
    spring: "hover:drop-shadow-spring",
    firebase: "hover:drop-shadow-firebase",
    sqlite: "hover:hover:drop-shadow-sqlite",
    mysql: "hover:hover:drop-shadow-mysql",
    figma: "hover:drop-shadow-figma",
    git: "hover:drop-shadow-git",
    unity: "hover:drop-shadow-unity",
  }

  return (
    <div className="grid place-items-center p-4">
      <img
        src={`${skill.name}.svg`}
        alt={`${skill.name} logo`}
        className={`${colors[skill.name]} h-16 w-16 grayscale transition-all hover:grayscale-0`}
      />
    </div>
  );
}
