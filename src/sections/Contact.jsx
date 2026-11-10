
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const EMAIL = "adishinde0921@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello Aditya,\n\n${formData.message}\n\nRegards,\n${formData.name}\n${formData.email}`
    )}`;

    window.open(gmailLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-night px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bronze">
            04 — GET IN TOUCH
          </p>

          <h2 className="font-heading text-4xl font-bold text-ivory sm:text-5xl md:text-6xl">
            Let's Work
            <span className="block font-display font-normal italic text-bronze">
              Together.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted md:text-base">
            Have an opportunity, project idea, or just want to connect?
            I'd love to hear from you. Feel free to send me a message.
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
                Have a conversation
              </p>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-lg text-ivory transition-colors hover:text-bronze sm:text-xl"
              >
                <Mail size={22} className="text-bronze" />
                {EMAIL}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-16 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Current Status
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                <p className="text-sm text-ivory">
                  Open to opportunities
                </p>
              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                Looking for opportunities to grow, contribute, and build
                meaningful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-bronze/20 bg-surface p-6 sm:p-8"
          >
            <h3 className="mb-8 font-heading text-2xl font-semibold text-ivory">
              Send a Message
            </h3>

            {/* NAME */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-widest text-muted"
              >
                Your Name
              </label>

              <div className="flex items-center gap-3 border-b border-white/15 pb-3 transition-colors focus-within:border-bronze">
                <User size={17} className="text-bronze" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent text-sm text-ivory outline-none placeholder:text-muted/60"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-xs uppercase tracking-widest text-muted"
              >
                Your Email
              </label>

              <div className="flex items-center gap-3 border-b border-white/15 pb-3 transition-colors focus-within:border-bronze">
                <Mail size={17} className="text-bronze" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent text-sm text-ivory outline-none placeholder:text-muted/60"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-xs uppercase tracking-widest text-muted"
              >
                Subject
              </label>

              <div className="flex items-center gap-3 border-b border-white/15 pb-3 transition-colors focus-within:border-bronze">
                <MessageSquare size={17} className="text-bronze" />
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full bg-transparent text-sm text-ivory outline-none placeholder:text-muted/60"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-widest text-muted"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-ivory outline-none transition-colors placeholder:text-muted/60 focus:border-bronze"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-bronze px-6 py-4 text-sm font-semibold uppercase tracking-wider text-night transition-all duration-300 hover:bg-ivory"
            >
              Send Message
              <Send
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              Your email application will open with your message ready.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
