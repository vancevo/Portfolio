export default function Skill() {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Technical Skills</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6 flex flex-col">
            <span className="skill">
              <p className="font-bold text-lg underline">Programming languages:</p>
              <p>JavaScript, TypeScript, C#</p>
            </span>
            <span className="skill">
              <p className="font-bold text-lg underline">UI Libraries:</p>
              <p>Shadcn, TailwindCSS, Bootstrap, MUI, Ant Design</p>
            </span>
          </div>
          <div className="col-lg-6 flex flex-col">
            <span className="skill">
              <p className="font-bold text-lg underline">Frameworks:</p>
              <p>Svelte, React, NextJS, ASP.NET MVC</p>
            </span>
            <span className="skill">
              <p className="font-bold text-lg underline">Databases:</p>
              <p>PostgreSQL, MySQL, GraphQL</p>
            </span>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg underline">Knowledge</p>
          <p>
            OOP, SOLID Principles, CI/CD pipelines, Docker, Kubernetes, NodeJS,
            Prisma, RESTful API, SvelteKit, Redux ToolKit, Zustand.
          </p>
        </div>
      </div>
    </section>
  );
}
