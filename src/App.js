import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
