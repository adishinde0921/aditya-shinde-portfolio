
import { motion } from "motion/react";
import PullCord from "./PullCard";

function IntroScreen({ onReveal }) {
  return (
    <motion.section
      key="intro"
      exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="night-background relative flex min-h-[calc(100vh-73px)] flex-col items-center justify-center overflow-hidden px-6"
    >

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-5 text-[10px] uppercase tracking-[0.3em] text-bronze"
      >
        A personal digital experience
      </motion.p>

      {/* Intro typography */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-center"
      >
        <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-ivory sm:text-6xl md:text-7xl">
          Something
        </h1>

        <p className="mt-2 font-display text-3xl italic text-bronze sm:text-5xl">
          extraordinary awaits.
        </p>
      </motion.div>

      {/* Interactive rope */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-12"
      >
        <PullCord onReveal={onReveal} />
      </motion.div>

      {/* Bottom information */}
      <div className="absolute bottom-7 left-0 flex w-full justify-between px-6 md:px-12">
        <span className="text-[9px] uppercase tracking-widest text-muted">
          Designed by Aditya Shinde
        </span>

        <span className="text-[9px] uppercase tracking-widest text-muted">
          Portfolio · 2026
        </span>
      </div>

    </motion.section>
  );
}

export default IntroScreen;
