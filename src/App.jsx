import './App.css'
import AboutMe from './Components/About/AboutMe'
import Hero from './Components/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

 AOS.init({ duration: 1000})

function App() {


  return (
    <>

      <main>
        <section>
          <Hero></Hero>
        </section>
        <section>
          <AboutMe></AboutMe>
        </section>
        <section>
          <Skills></Skills>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section>
          <Contact></Contact>
        </section>
      </main>


    </>
  )
}

export default App
