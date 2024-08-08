import { cn } from "../lib/utilis";

const RenderSkill = ({ label, value }: Record<string, string>) => (
  <span className="skill">
    <p className="font-bold text-lg underline">{label}:</p>
    <p>{value}</p>
  </span>
);

export default function Skill() {
  const skills = [
    {
      label: "Programming languages",
      value: "JavaScript, TypeScript, C#",
    },
    {
      label: "UI Libraries",
      value: "Shadcn, TailwindCSS, Bootstrap, MUI, Ant Design",
    },
    {
      label: "Frameworks",
      value: "Svelte, React, NextJS, ASP.NET MVC",
    },
    {
      label: "Databases",
      value: "PostgreSQL, MySQL, GraphQL",
    },
    {
      label: "Knowledge",
      value:
        "OOP, SOLID Principles, CI/CD pipelines, Docker, Kubernetes, NodeJS, Prisma, RESTful API, SvelteKit, Redux ToolKit, Zustand.",
    },
  ];

  const knowledge = {
    label: "Knowledge",
    value:
      "OOP, SOLID Principles, CI/CD pipelines, Docker, Kubernetes, NodeJS, Prisma, RESTful API, SvelteKit, Redux ToolKit, Zustand.",
  };

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Technical Skills</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {skills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className={cn(
                "flex flex-col",
                index >= skills.length - 1 ? "col-lg-12" : "col-lg-6"
              )}
            >
              <RenderSkill label={skill.label} value={skill.value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
