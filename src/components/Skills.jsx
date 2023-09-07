import SkillsItem from "./SkillsItem";

const skills = [
  {
    id: 1,
    name: "css",
    tooltip: "CSS"
  },
  {
    id: 2,
    name: "html",
    tooltip: "HTML",
  },

  {
    id: 3,
    name: "javascript",
    tooltip: "JavaScript"
  },

  {
    id: 4,
    name: "java",
    tooltip: "Java"
  },
  {
    id: 5,
    name: "csharp",
    tooltip: "C#"
  },
  {
    id: 6,
    name: "tailwind",
    tooltip: "Tailwind CSS"
  },
  {
    id: 7,
    name: "bootstrap",
    tooltip: "Bootstrap"
  },
  {
    id: 8,
    name: "react",
    tooltip: "React"
  },
  {
    id: 9,
    name: "spring",
    tooltip: "Spring"
  },
  {
    id: 10,
    name: "firebase",
    tooltip: "Firebase"
  },
  {
    id: 11,
    name: "sqlite",
    tooltip: "SQLite 3"
  },
  {
    id: 12,
    name: "mysql",
    tooltip: "MySQL"
  },
  {
    id: 13,
    name: "figma",
    tooltip: "Figma"
  },
  {
    id: 14,
    name: "git",
    tooltip: "Git"
  },
  {
    id: 15,
    name: "unity",
    tooltip: "Unity 3D"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 text-gray-300 lg:px-0">
      <div className="h-14"></div>
      <h2 className="mt-2 text-2xl font-bold tracking-widest text-amber-500">
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => (
          <SkillsItem key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
