import TypingAnimation from "./TypingAnimation";

export default function Intro() {
  
  const typingData = [
    "I am a Web Developer",
    400,
    "Dynamic, Motivate, Fast Learner",
    400,
    "Enjoy solving Front-end issues",
    400,
    "Become to Fullstack Developer",
    400,
  ];

  return (
    <section
      id="home"
      className="hero section light-background"
    >
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/001/849/553/small_2x/modern-gold-background-free-vector.jpg"
        alt=""
      />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center ">
            <h2>Hello,</h2>
            <h2>My name is VO PHU VINH</h2>
            <TypingAnimation data={typingData} />
            <div className="social-links">
              <a href="https://github.com/vancevo" target="_blank">
                <i className="bi bi-github hover:text-black"></i>
              </a>
              <a href="https://www.linkedin.com/in/vinhvo27798/" target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/EvilDevil.V" target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
