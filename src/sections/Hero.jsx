
import { motion } from "motion/react";
import Footer from "../components/Footer";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const PORTRAIT_IMAGE = "/images/Professional%20Portrait%20Cutout.png";

const SVG_WIDTH = 1400;
const SVG_HEIGHT = 650;

function Hero() {
  return (
    <section
      id="home"
      className="night-background relative isolate min-h-screen overflow-hidden px-5 pb-8 pt-8 sm:px-8 md:px-12 md:pt-10"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-bronze/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[130px]" />

      {/* ROLE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-bronze sm:text-xs sm:tracking-[0.35em]">
          Software Engineer · React Developer
        </p>
      </motion.div>

      {/* PORTRAIT + NAME COMPOSITION */}
      <div className="relative isolate mx-auto -mt-1 h-[390px] w-full max-w-[1400px] sm:mt-0 sm:h-[480px] md:h-[560px] lg:h-[620px]">

        {/* LAYER 1: NAME BEHIND PORTRAIT */}
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 z-10 h-full w-full"
          aria-hidden="true"
        >
          <text
            x="700"
            y="430"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize="150"
            fontWeight="900"
            letterSpacing="-8"
            fill="#F5F0E8"
          >
            ADITYA SHINDE
          </text>
        </svg>

        {/* LAYER 2: PORTRAIT */}
        <motion.img
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeOut",
          }}
          src={PORTRAIT_IMAGE}
          alt="Aditya Shinde"
          draggable="false"
          className="absolute bottom-0 left-1/2 z-20 h-[90%] w-[60%] -translate-x-1/2 object-contain object-bottom drop-shadow-2xl sm:w-[55%] md:w-[42%] lg:w-[35%]"
        />

        {/* LAYER 3: NAME OUTLINE OVER PORTRAIT */}
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none absolute inset-0 z-30 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <mask
              id="portrait-alpha-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={SVG_WIDTH}
              height={SVG_HEIGHT}
              style={{ maskType: "alpha" }}
            >
              <image
                href={PORTRAIT_IMAGE}
                x="0"
                y="0"
                width={SVG_WIDTH}
                height={SVG_HEIGHT}
                preserveAspectRatio="xMidYMax meet"
              />
            </mask>
          </defs>

          <text
            x="700"
            y="430"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize="150"
            fontWeight="900"
            letterSpacing="-8"
            fill="none"
            stroke="#58514a"
            strokeWidth="2"
            mask="url(#portrait-alpha-mask)"
          >
            ADITYA SHINDE
          </text>
        </svg>
      </div>

      {/* INTRODUCTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-40 mx-auto mt-2 flex max-w-[1400px] flex-col gap-6 sm:mt-4 md:flex-row md:items-end md:justify-between"
      >
        <div className="max-w-xl">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-bronze sm:text-xs">
            Hello, I am Aditya
          </p>

          <h2 className="font-display text-2xl italic leading-tight text-ivory sm:text-3xl md:text-4xl">
            I build digital experiences.
          </h2>

          <p className="mt-3 max-w-md text-xs leading-6 text-muted sm:text-sm sm:leading-7">
            Computer Engineering graduate passionate about
            React.js, JavaScript and modern web development.
          </p>
        </div>

        <a
          href="#projects"
          className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-bronze/50 px-5 py-3 text-[10px] uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-bronze hover:text-night sm:px-6 sm:text-xs"
        >
          Explore my work
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="relative z-40 mt-10 flex items-center justify-center gap-3 text-muted sm:mt-12">
        <ArrowDown size={15} />
        <span className="text-[9px] uppercase tracking-[0.25em] sm:text-[10px]">
          Scroll to explore
        </span>
      </div>

      <Footer />
    </section>
  );
}

export default Hero;
