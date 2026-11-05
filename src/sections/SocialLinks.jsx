
function SocialLinks() {
  return (
    <section
      id="social"
      className="relative w-full bg-surface px-6 py-10 md:px-12"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">

        {/* Elsewhere Label */}
        <div className="flex items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            Elsewhere
          </p>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/aditya-shinde-7aa974290/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-bronze/25 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bronze/[0.05]"
        >
          <div className="flex flex-col gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-ivory text-sm font-bold text-night transition-transform duration-300 group-hover:scale-110">
              in
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ivory">
                LinkedIn
              </h3>
              <p className="mt-1 text-xs text-muted">
                Connect with me
              </p>
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/adishinde0921"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-bronze/25 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bronze/[0.05]"
        >
          <div className="flex flex-col gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-ivory text-xs font-bold text-ivory transition-transform duration-300 group-hover:scale-110">
              GH
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ivory">
                GitHub
              </h3>
              <p className="mt-1 text-xs text-muted">
                Explore my projects
              </p>
            </div>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/_adi_2060?dlrf=MTlxdDFqYWtseHc1NQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-bronze/25 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bronze/[0.05]"
        >
          <div className="flex flex-col gap-3">
            {/* Instagram Logo */}
            <div className="flex h-6 w-6 items-center justify-center text-ivory transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="18"
                  cy="6"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ivory">
                Instagram
              </h3>
              <p className="mt-1 text-xs text-muted">
                Follow my journey
              </p>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}

export default SocialLinks;
