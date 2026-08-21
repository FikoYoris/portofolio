import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Fiko.
          </a>

          <div className="hidden gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#about" className="transition hover:text-[#31CB00]">
              About
            </a>
            <a href="#projects" className="transition hover:text-[#31CB00]">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-[#31CB00]">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-[#31CB00]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20">
        <div className="grid w-full items-center gap-16 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#119822]">
              Data Analyst · Data Science
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Turning data into
              <span className="block text-[#2A7221]">
                meaningful insights.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              Hi, I&apos;m Fiko Yorisdwi &apos;Aliy, an Informatics graduate
              focused on data analytics, data visualization, and data science.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#119822] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#31CB00] hover:text-black"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#2A7221] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#152614]"
              >
                Contact Me
              </a>

              <a
                href="/cv-fiko-aliy.pdf"
                download
                className="rounded-full bg-[#119822] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#31CB00] hover:text-black"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="group relative h-56 w-56 sm:h-64 sm:w-64">
              <div className="absolute -inset-1 rounded-full bg-[#119822]/30 opacity-60 blur-xl transition duration-500 group-hover:bg-[#31CB00]/40 group-hover:opacity-100" />

              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#2A7221] bg-[#152614] shadow-[0_0_60px_rgba(17,152,34,0.15)] transition duration-500 group-hover:border-[#31CB00] group-hover:shadow-[0_0_70px_rgba(49,203,0,0.25)]">
                <Image
                  src="/profile.png"
                  alt="Fiko Yorisdwi 'Aliy"
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[#2A7221]/30 bg-[#071207] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#119822]">
            About Me
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Turning curiosity
                <br />
                into data-driven solutions.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                I&apos;m an Informatics graduate with a strong interest in data
                analytics, data visualization, and data science. I enjoy
                working with data to uncover patterns, communicate insights, and
                support better decision-making.
              </p>

              <p>
                My experience includes building interactive dashboards, analyzing
                real-world datasets, and developing machine learning solutions for
                data-driven problems. I&apos;m particularly interested in turning
                complex data into insights that are clear, useful, and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#119822]">
              Featured Projects
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Olist */}
            <article className="group overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614] transition duration-300 hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              {/* Project Preview */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#1E441E]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute bottom-0 left-8 h-20 w-10 rounded-t-md bg-[#31CB00]" />
                  <div className="absolute bottom-0 left-20 h-28 w-10 rounded-t-md bg-[#31CB00]" />
                  <div className="absolute bottom-0 left-32 h-16 w-10 rounded-t-md bg-[#31CB00]" />
                  <div className="absolute bottom-0 left-44 h-32 w-10 rounded-t-md bg-[#31CB00]" />
                  <div className="absolute bottom-0 left-56 h-24 w-10 rounded-t-md bg-[#31CB00]" />
                </div>

                <span className="relative z-10 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                  Power BI Dashboard
                </span>

                <span className="absolute right-6 top-5 text-xs text-zinc-400">
                  01
                </span>
              </div>

              {/* Project Info */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-[#119822]">
                    Data Analytics
                  </p>

                  <span className="text-xs text-zinc-500">
                    2026
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-semibold">
                  Olist E-Commerce Analytics
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  An interactive Power BI dashboard exploring sales performance,
                  customer behavior, product performance, and seller geography
                  using the Brazilian E-Commerce dataset.
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Power BI",
                    "DAX",
                    "Data Modeling",
                    "Data Visualization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-7 border-t border-white/10 pt-5">
                  <a
                    href="/projects/olist"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#31CB00]"
                  >
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Asthma */}
            <article className="group overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614] transition duration-300 hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              {/* Project Preview */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#1E441E]">
                <div className="absolute inset-x-7 top-1/2 h-px bg-[#31CB00]/20" />
                <div className="absolute inset-x-7 top-[42%] h-px bg-[#31CB00]/10" />
                <div className="absolute inset-x-7 top-[58%] h-px bg-[#31CB00]/10" />

                <svg
                  viewBox="0 0 600 180"
                  className="absolute inset-x-7 top-1/2 h-32 w-[calc(100%-3.5rem)] -translate-y-1/2"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polyline
                    points="0,125 55,115 110,120 165,85 220,95 275,55 330,75 385,40 440,65 495,30 550,55 600,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-[#31CB00]"
                  />
                </svg>

                <span className="absolute right-6 top-5 text-xs text-zinc-400">
                  02
                </span>

                <span className="absolute left-6 bottom-5 text-xs uppercase tracking-[0.15em] text-zinc-500">
                  Heart Rate · Time-Series · Prediction
                </span>

                <span className="relative z-10 mt-[-110px] text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                  Deep Learning
                </span>
              </div>

              {/* Project Info */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-[#119822]">
                    Data Science · Final Project
                  </p>

                  <span className="text-xs text-zinc-500">
                    2026
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-semibold">
                  Asthma Attack Prediction Using Deep Learning on Multimodal Time-Series
                  Data
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  A multimodal deep learning project combining physiological time-series
                  and environmental data to predict asthma exacerbation risk.
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "PyTorch",
                    "Deep Learning",
                    "Time-Series",
                    "Machine Learning",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-7 border-t border-white/10 pt-5">
                  <a
                    href="/projects/asthma-attack"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#31CB00]"
                  >
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#119822]">
              Skills
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools I work with
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Data Analytics */}
            <article className="rounded-3xl border border-[#2A7221]/30 bg-[#152614] p-7 transition hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#119822]">
                Data Analytics
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Data Analysis & Processing
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "R",
                  "Pandas",
                  "NumPy",
                  "Data Cleaning",
                  "Exploratory Data Analysis",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            {/* Data Science & Machine Learning */}
            <article className="rounded-3xl border border-[#2A7221]/30 bg-[#152614] p-7 transition hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#119822]">
                Data Science
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Machine Learning & Deep Learning
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Scikit-learn",
                  "XGBoost",
                  "PyTorch",
                  "Machine Learning",
                  "Deep Learning",
                  "Time-Series",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            {/* Visualization & BI */}
            <article className="rounded-3xl border border-[#2A7221]/30 bg-[#152614] p-7 transition hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#119822]">
                Visualization & BI
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Turning Data into Insights
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Power BI",
                  "DAX",
                  "Data Modeling",
                  "Looker Studio",
                  "Matplotlib",
                  "Seaborn",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            {/* Database & Tools */}
            <article className="rounded-3xl border border-[#2A7221]/30 bg-[#152614] p-7 transition hover:-translate-y-1 hover:border-[#119822] hover:shadow-[0_15px_50px_rgba(17,152,34,0.12)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#119822]">
                Database & Tools
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Development Environment
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "Git & GitHub",
                  "Google Colab",
                  "VS Code",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-[#2A7221]/30 bg-[#071207] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#119822]">
            Contact
          </p>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            {/* Heading */}
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="block text-[#2A7221]">
                  meaningful with data.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Open to opportunities in data analytics, data science, and
                data-driven problem solving. Feel free to reach out and connect.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:fikoyrs@gmail.com?subject=Contact%20from%20Portfolio"
                className="group flex items-center justify-between rounded-2xl border border-[#2A7221]/40 bg-[#152614] px-5 py-4 transition hover:border-[#119822] hover:bg-[#1E441E]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    fikoyrs@gmail.com
                  </p>
                </div>

                <span className="text-xl text-[#119822] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fiko-aliy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#2A7221]/40 bg-[#152614] px-5 py-4 transition hover:border-[#119822] hover:bg-[#1E441E]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    Connect professionally
                  </p>
                </div>

                <span className="text-xl text-[#119822] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/FikoYoris"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#2A7221]/40 bg-[#152614] px-5 py-4 transition hover:border-[#119822] hover:bg-[#1E441E]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                    GitHub
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    View my projects
                  </p>
                </div>

                <span className="text-xl text-[#119822] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/fikoyoris"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#2A7221]/40 bg-[#152614] px-5 py-4 transition hover:border-[#119822] hover:bg-[#1E441E]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Instagram
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    @fikoyoris
                  </p>
                </div>

                <span className="text-xl text-[#119822] transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Fiko Yorisdwi 'Aliy —  All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}