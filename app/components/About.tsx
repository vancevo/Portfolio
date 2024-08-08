import Skill from "./Skill";
import parse from 'html-react-parser';

export default function About() {
  const yearNow = new Date().getFullYear();
  const yearBirthday = 1998;

  const user = {
    name: "Vo Phu Vinh",
    position: "Front-End & Web Developer",
    favorites: [
      "I enjoy solving Front-end problems and creating the best user experience for users.",
      "I also spend time learning new technologies and best practices to become a <strong>FullStack Developer</strong>",
    ],
    description:
      "I am a Front-end Developer, with 2 years of hands-on experience in creating, debugging, and maintaining web applications and 4 years of experience in teaching programming, which has given me a solid foundation in coding.",
    infos: [
      {
        label: "Birthday",
        value: "27-07-1998",
      },
      {
        label: "Phone",
        value: "(+84) 706-166-506",
      },
      {
        label: "City",
        value: "Ho Chi Minh City",
      },
      {
        label: "Age",
        value: `${yearNow - yearBirthday}`,
      },
      {
        label: "Degree",
        value: "Computer Science Teacher Education",
      },
      {
        label: "Email",
        value: "phuvinh.job.277@gmail.com",
      },
    ],
  };

  return (
    <section
      id="about"
      className="about section"
      style={{
        paddingBottom: "0px",
      }}
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/108126096_2249449995200275_6735648879261706535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=7VDrIftDFAoQ7kNvgG7nWAR&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYD6lf03cI7rDElbdVjuEGR7QTsTZOn8-_C0LYRXetP8YQ&oe=66DAA222"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>{user.position}</h2>
            <div className="fst-italic">
              {user.favorites.map((favor, index) => (
                <p key={`favor${index}`} className="mb-1">
                  {parse(favor)}
                </p>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul>
                  {user.infos.map((info) => (
                    <li key={info.label}>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>{info.label}:</strong> <span>{info.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="py-3 text-justify">{user.description}</p>
          </div>
        </div>
        <Skill />
      </div>
    </section>
  );
}
