
import { useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import IntroScreen from "./components/IntroScreen";
import Hero from "./sections/Hero";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <main className="min-h-screen bg-night">
      <Navbar />

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <IntroScreen
            key="intro"
            onReveal={() => setIsRevealed(true)}
          />
        ) : (
          <Hero key="portfolio" />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
