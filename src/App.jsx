
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SocialLinks from "./sections/SocialLinks";

function App() {
  return (
    <main className="min-h-screen bg-night">
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
    </main>
  );
}

export default App;
