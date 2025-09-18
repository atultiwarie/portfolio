import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="home">
                <Home />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="education">
                <Education />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
