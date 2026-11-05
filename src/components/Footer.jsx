
import { motion } from "motion/react";
import { Star } from "lucide-react";

const roles = [
  "Software Developer",
  "React.js Developer",
  "Frontend Developer",
  "Full Stack Developer",
];

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 w-full border-t border-bronze/20 bg-surface/90 px-5 py-5 backdrop-blur-md md:px-12"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-between">

        {roles.map((role, index) => (
          <div key={role} className="flex items-center gap-5">

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:text-bronze sm:text-xs"
            >
              {role}
            </motion.span>

            {index !== roles.length - 1 && (
              <Star
                size={13}
                fill="#AC8968"
                color="#AC8968"
                className="shrink-0"
              />
            )}

          </div>
        ))}

      </div>
    </motion.footer>
  );
}

export default Footer;
