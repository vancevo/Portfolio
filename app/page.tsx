import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="body">
      <header
        id="header"
        className="header d-flex flex-column justify-content-center"
      >
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <Navbar />
      </header>

      <Intro />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
