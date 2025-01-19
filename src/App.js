import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import Skill from "./components/Skills/skill"
import About from "./components/About/About"
import Resume from "./Resume/Resume"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skill/>
      <Project/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
