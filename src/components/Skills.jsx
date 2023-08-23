import SkillsItem from "./SkillsItem";

const skills = [
  {
    id: 1,
    name: "css",
  },
  {
    id: 2,
    name: "html",
  },

  {
    id: 3,
    name: "javascript",
  },

  {
    id: 4,
    name: "java",
  },
  {
    id: 5,
    name: "csharp",
  },
  {
    id: 6,
    name: "tailwind",
  },
  {
    id: 7,
    name: "bootstrap",
  },
  {
    id: 8,
    name: "react",
  },
  {
    id: 9,
    name: "spring",
  },
  {
    id: 10,
    name: "firebase",
  },
  {
    id: 11,
    name: "sqlite",
  },
  {
    id: 12,
    name: "mysql",
  },
  {
    id: 13,
    name: "figma",
  },
  {
    id: 14,
    name: "git",
  },
  {
    id: 15,
    name: "unity",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 text-gray-300 lg:px-0">
      <div className="h-14"></div>
      <h2 className="mt-2 text-2xl font-bold tracking-widest text-amber-500">
        Skill
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => (
          <SkillsItem key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
