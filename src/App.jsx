import './App.css'
import AboutMe from './Components/About/AboutMe'
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

 AOS.init({ duration: 1000})

function App() {


  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
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

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
