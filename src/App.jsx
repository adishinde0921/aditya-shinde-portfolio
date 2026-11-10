
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SocialLinks from "./sections/SocialLinks";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import FinalFooter from "./components/FinalFooter"


function App() {
  return (
    <main className="min-h-screen bg-night">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <SocialLinks />
      <Contact />
      <FinalFooter />
    </main>
  );
}

export default App;
