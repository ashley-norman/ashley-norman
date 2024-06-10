type SkillCategory = {
  label: string;
  skills: string[];
};
const skillCategories: SkillCategory[] = [
  {
    label: "Front End",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "Vue", "Nuxt"],
  },
  {
    label: "Styling & Design",
    skills: [
      "CSS",
      "SASS",
      "Tailwind CSS",
      "CSS Module",
      "SVG",
      "Adobe XD",
      "Storybook",
      "Responsive Design",
    ],
  },
  {
    label: "Back End & Data",
    skills: [
      "Node",
      "Express",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "Postgres",
      "elasticsearch",
      "S3",
      "Java",
      "Spring/Boot",
      "Python",
      "Minio",
      "sequelize",
    ],
  },
  {
    label: "DevOps",
    skills: ["Docker", "AWS Services", "Jenkins"],
  },
  {
    label: "Miscellaneous",
    skills: [
      "Git",
      "Jira",
      "Trello",
      "OAuth/OIDC",
      "Keycloak",
      "Visual Studio Code",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <ul>
      {skillCategories.map(({ label, skills }) => (
        <li key={label}>
          <h2 className="font-semibold text-2xl mt-9 mb-3">{label}</h2>
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className={`p-2 bg-zinc-800 border rounded border-zinc-800`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default Skills;
