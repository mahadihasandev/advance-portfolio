import Header from "./shared/header";
import Hero from "./sections/hero";
import Work from "./sections/work";
import About from "./sections/about";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Approach from "./sections/approach";
export default function Portfolio() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="stack-strip">
          <span>REACT NATIVE</span>
          <i>✳</i>
          <span>NEXT.JS</span>
          <i>✳</i>
          <span>TYPESCRIPT</span>
          <i>✳</i>
          <span>REACT</span>
          <i>✳</i>
          <span>NODE.JS</span>
          <i>✳</i>
          <span>PHP</span>
          <i>✳</i>
          <span>THOUGHTFUL ENGINEERING</span>
        </div>
        <Work />
        <About />
        <Experience />
        <Approach />
        <Contact />
      </main>
    </>
  );
}
