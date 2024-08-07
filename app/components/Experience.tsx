export default function Experience() {
  return (
    <section id="experience" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Professional Experience</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h3 className="resume-title">Designveloper Company (DSV)</h3>
            </div>

            <div className="resume-item pb-0">
              <div className="flex items-center justify-between">
                <h4>
                  Cattr Project -{" "}
                  <span className="text-sm italic">Front-End</span>
                </h4>
                <p className="text-neutral-500 italic">Apr 2023 - May 2024</p>
              </div>
              <div>
                <p>
                  <em>
                    By integrating into one of HRM modules, Cattr managed
                    employee working hours within company.
                  </em>
                </p>
              </div>
              <div>
                <p className="font-bold underline">Technologies:</p>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    React, TypeScript, NextJs, NodeJs, NestJs, GraphQL,
                    PostgreSQL, Bootstrap
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold underline">Responsibles:</p>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Develop new features/modules as Projects, Accounts,
                    Priorities, Manage time.
                  </li>
                  <li>
                    Fixing, debugging, maintaining in production environment.
                  </li>
                  <li>
                    Utilize the Scrum & Agile, Pair Programming for efficient
                    project management.
                  </li>
                </ul>
              </div>
            </div>
            <div className="resume-item pb-0">
              <div className="flex items-center justify-between">
                <h4>
                  HRM Project -{" "}
                  <span className="text-sm italic">Front-End</span>
                </h4>
                <p className="text-neutral-500 italic">Apr 2022 - May 2024</p>
              </div>
              <div>
                <p>
                  <em>
                    Production project aimed at building modules for the
                    company's resource management,
                  </em>
                </p>
              </div>
              <div>
                <p className="font-bold underline">Technologies:</p>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Svelte, TypeScript, NodeJs, NestJs, GraphQL, PostgreSQL,
                    TailwindCSS
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold underline">Responsibles:</p>
                <ul
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Develop new features/modules as Users, Project Management,
                    Timesheet, Timelog, Client, OKRs, Employees, Calendar
                    modules, with all modules successfully released.
                  </li>
                  <li>
                    Optimize web pages speed and scalability, reducing load
                    times by 30%.
                  </li>
                  <li>
                    Write maintainable and reusable code for calculations.
                  </li>
                  <li>
                    Fix and debug issues in the production environment for
                    hotfixes.
                  </li>
                  <li>
                    Utilize the Scrum & Agile, Pair Programming for efficient
                    project management.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold underline">Achievements:</p>
              <ul
                style={{
                  listStyleType: "disc",
                }}
              >
                <li>Achieved the team bonus year-end party award in 2024.</li>
                <li>Achieved the top 1 team building award in 2023.</li>
                <li>Knowledgeable in CI/CD principles, Git flow, Docker.</li>
                <li>Proficient in React, Svelte.</li>
                <li>Improved UX/UI, problem solving, estimate, risk management.</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h3 className="resume-title">VUS - The English Center</h3>
              <div className="resume-item">
                <div className="flex items-center justify-between">
                  <h4>
                    BSD CLASS -{" "}
                    <span className="text-sm italic">Teaching Programming</span>
                  </h4>
                  <p className="text-neutral-500 italic">Apr 2022 - Dec 2024</p>
                </div>
                <div>
                  <p>
                    <em>
                      The project utilized STEAM and teaching methods for
                      teaching website programming.
                    </em>
                  </p>
                </div>
                <div>
                  <p className="font-bold underline">Responsibles:</p>
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      Guide learners to create and develop projects on the web
                      application, with over 25 classes.
                    </li>
                    <li>
                      Support learner’s improvement in digital skills,
                      communication, logical thinking, effective
                      problem-solving, teamwork, and presentation skills
                    </li>
                    <li>Utilize 5E models, PBL (Project-Based Learning).</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold underline">Achievements:</p>
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      Taught over 25 classes, with 2 classes completing the
                      final course.
                    </li>
                    <li>Applied more STEAM in teaching.</li>
                    <li>
                      Implemented more 5E and PBL (Project-Based Learning)
                      models.
                    </li>
                    <li>IDeveloped soft skills and management skills.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="resume-title">Teky Academy</h3>
              <div className="resume-item">
                <div className="flex items-center justify-between">
                  <h4>
                    Teky Class -{" "}
                    <span className="text-sm italic">
                      Development, Lecturer
                    </span>
                  </h4>
                  <p className="text-neutral-500 italic">Apr 2021 - Apr 2022</p>
                </div>
                <div>
                  <p>
                    <em>
                      Develop capstone projects, by HTML, CSS, JS and Python.
                      And mentored students and planned comprehensive lessons.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
