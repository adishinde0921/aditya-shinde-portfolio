
import { motion } from "motion/react";
import Footer from "../components/Footer";
import { ArrowDown, ArrowUpRight } from "lucide-react";

// CHANGE IMAGE SIZE HERE
const PORTRAIT_WIDTH = 30;

// Image path
const PORTRAIT_IMAGE = "/images/Professional%20Portrait%20Cutout.png";

// SVG composition dimensions
const SVG_WIDTH = 1400;
const SVG_HEIGHT = 650;

// Automatic horizontal image position
const IMAGE_X = (100 - PORTRAIT_WIDTH) / 2;

function Hero() {
  return (
    <section
      id="home"
      className="night-background relative min-h-screen overflow-hidden px-5 py-12 md:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-bronze/10 blur-[130px]" />

      {/* Professional heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-5 text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-bronze">
          Software Engineer · React Developer
        </p>
      </motion.div>

      {/* Main composition */}
      <div className="relative isolate mx-auto mt-12 -translate-y-12 h-[430px] w-full max-w-[1400px] sm:h-[520px] md:h-[650px]">

        {/* Layer 1: Solid name behind image */}
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          preserveAspectRatio="none"
          className="absolute inset-0 z-10 h-full w-full overflow-visible"
          aria-label="Aditya Shinde"
          role="img"
        >
          <text
            x="700"
            y="385"
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

        {/* Layer 2: Portrait */}
        <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeOut",
          }}
          src={PORTRAIT_IMAGE}
          alt="Aditya Shinde"
          draggable="false"
          style={{
            width: `${PORTRAIT_WIDTH}%`,
          }}
          className="absolute bottom-10 left-1/2 z-20 h-full -translate-x-1/2 object-contain object-bottom drop-shadow-2xl"
        />

        {/* Layer 3: Text outline on portrait */}
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
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
                x={`${IMAGE_X}%`}
                y="0"
                width={`${PORTRAIT_WIDTH}%`}
                height={SVG_HEIGHT}
                preserveAspectRatio="xMidYMax meet"
              />
            </mask>
          </defs>

          <text
            x="700"
            y="385"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize="150"
            fontWeight="900"
            letterSpacing="-8"
            fill="none"
            stroke="#5a5857"
            strokeWidth="2"
            mask="url(#portrait-alpha-mask)"
          >
            ADITYA SHINDE
          </text>
        </svg>
      </div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-40 mx-auto mt-6 flex max-w-[1400px] flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-bronze">
            Hello, I am Aditya
          </p>

          <h2 className="font-display text-2xl italic text-ivory md:text-4xl">
            I build digital experiences.
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-muted">
            Computer Engineering graduate passionate about
            React.js, JavaScript and modern web development.
          </p>
        </div>

        <a
          href="#projects"
          className="group flex w-fit items-center gap-3 rounded-full border border-bronze/50 px-6 py-3 text-xs uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-bronze hover:text-night"
        >
          Explore my work

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <div className="relative z-40 mt-12 flex items-center justify-center gap-3 text-muted">
        <ArrowDown size={15} />

        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        
      </div>
      <Footer />
    </section>
  );
}

export default Hero;
