
import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

function FinalFooter() {
  const currentYear = new Date().getFullYear();

  const EMAIL = "adishinde0921@gmail.com";

  const hireMeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Job%20Opportunity`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-surface px-6 pb-8 pt-16 md:px-12">

      <div className="mx-auto max-w-[1200px]">

        {/* TOP FOOTER */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="font-heading text-3xl font-black tracking-tighter text-ivory"
            >
              AS<span className="text-bronze">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Aditya Shinde — Software Engineer and React Developer.
              Passionate about building modern web applications and
              meaningful digital experiences.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-bronze">
              Quick Links
            </p>

            <div className="flex flex-col gap-3">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-bronze">
              Connect With Me
            </p>

            <div className="flex flex-col gap-4">

              <a
                href={hireMeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-bronze"
              >
                <Mail size={17} />
                Email Me
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://github.com/adishinde0921"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-bronze"
              >
                <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border border-current text-[9px] font-bold">
  GH
</span>GitHub
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-shinde-7aa974290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-bronze"
              >
                <span className="flex h-[17px] w-[17px] items-center justify-center rounded-sm border border-current text-[10px] font-bold">
                  in
                </span>
                LinkedIn
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-white/10" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center text-xs text-muted">
            © {currentYear} Aditya Shinde. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-muted">
            Designed & Built with <span className="text-bronze">♥</span> using React
          </p>

          {/* BACK TO TOP */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-bronze/30 text-bronze transition-all duration-300 hover:-translate-y-1 hover:bg-bronze hover:text-night"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default FinalFooter;
