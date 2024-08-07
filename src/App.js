
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import HomePage from "./Components/home";
import Experience from "./Components/experience";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";
function App() {
  return (
    <div >
      <NavBar />
      <HomePage></HomePage>
      <SocialLinks />
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
   
  );
}

export default App;
