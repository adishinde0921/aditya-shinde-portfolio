
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownToLine,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const EMAIL = "adishinde0921@gmail.com";

  const hireMeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Job%20Opportunity`;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-50 border-b border-white/10 bg-night/95 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 md:px-12 md:py-5">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="shrink-0 font-heading text-2xl font-black tracking-tighter text-ivory"
        >
          AS <span className="text-bronze">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden items-center gap-3 md:flex">

          {/* DOWNLOAD CV */}
          <a
            href="/resume/resume.pdf"
            download="Aditya_Shinde_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-bronze/40 px-5 py-3 text-sm font-semibold uppercase text-ivory transition-all duration-300 hover:bg-bronze hover:text-night"
          >
            Download CV
            <ArrowDownToLine size={15} />
          </a>

          {/* HIRE ME */}
          <a
            href={hireMeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-semibold uppercase text-night transition-all duration-300 hover:bg-ivory"
          >
            Hire Me
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex items-center justify-center rounded-full border border-white/15 p-2 text-ivory transition-colors hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-night md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">

              {/* MOBILE NAVIGATION */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-ivory transition-colors hover:text-bronze"
                >
                  {link.name}
                </a>
              ))}

              {/* MOBILE DOWNLOAD CV */}
              <a
                href="/resume/resume.pdf"
                download="Aditya_Shinde_Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-bronze/40 px-5 py-3 text-sm font-semibold uppercase text-ivory transition-all duration-300 hover:bg-bronze hover:text-night"
              >
                Download CV
                <ArrowDownToLine size={15} />
              </a>

              {/* MOBILE HIRE ME */}
              <a
                href={hireMeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-semibold uppercase text-night"
              >
                Hire Me
                <ArrowUpRight size={15} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
