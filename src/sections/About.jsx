
import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description: "Building modern web experiences with React.js and JavaScript.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Exploring new technologies and improving my development skills.",
  },
  {
    icon: Rocket,
    title: "Creating",
    description: "Turning ideas into practical projects and meaningful solutions.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#11100F] px-6 py-20 md:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-bronze/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-bronze/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1100px]"
      >
        {/* Section label */}
        <div className="mb-7 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
            01 — About Me
          </p>
        </div>

        {/* Main heading */}
        <h2 className="text-center font-heading text-3xl font-bold leading-tight tracking-tight text-ivory sm:text-4xl md:text-6xl">
          Building ideas into
          <span className="mt-2 block font-display font-normal italic text-bronze">
            digital experiences.
          </span>
        </h2>

        {/* Short Bio */}
        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-8 text-muted sm:text-base md:text-lg">
          I build meaningful digital experiences through modern web
          technologies, work on{" "}
          <span className="font-display text-xl italic text-bronze md:text-2xl">
            real-world
          </span>{" "}
          projects, and continuously explore new ways to solve problems
          through code.
        </p>

        {/* Professional Highlights */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-xl border border-bronze/15 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-bronze/50 hover:bg-bronze/[0.04]"
              >
                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="mb-5 text-bronze transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-ivory">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-bronze/60" />

          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted">
            Curious mind. Continuous growth.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
