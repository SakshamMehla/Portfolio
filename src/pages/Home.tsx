export function Home() {
    return (
      <>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
            Computer Science Student
          </p>
  
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
            Building strong foundations in computer science and AI, one project
            at a time.
          </h1>
  
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
            Hi, I&apos;m Saksham — a Computer Science student at Thapar Institute
            of Engineering and Technology, interested in AI/ML and software
            development.
          </p>
  
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#work"
              className="border-b border-ink pb-1 text-sm font-medium hover:opacity-60"
            >
              View my work →
            </a>
  
            <a
              href="https://github.com/SakshamMehla"
              target="_blank"
              rel="noreferrer"
              className="border-b border-rule pb-1 text-sm font-medium hover:border-ink"
            >
              GitHub ↗
            </a>
            <a
  href="https://www.linkedin.com/in/saksham-mehla-54746937a"
  target="_blank"
  rel="noreferrer"
  className="border-b border-rule pb-1 text-sm font-medium hover:border-ink"
>
  LinkedIn ↗
</a>
          </div>
        </section>
  
        {/* About */}
        <section
          id="about"
          className="border-t border-rule"
        >
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
                About
              </p>
            </div>
  
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Learning by building, with a focus on strong fundamentals.
              </h2>
  
              <div className="mt-8 space-y-5 text-base leading-7 text-ink/70">
                <p>
                  I&apos;m currently studying Computer Science at Thapar
                  Institute of Engineering and Technology. I enjoy understanding
                  how things work and turning that understanding into practical
                  software.
                </p>
  
                <p>
                  My current focus is on strengthening my foundations in
                  programming, data structures and algorithms, while gradually
                  exploring artificial intelligence and machine learning.
                </p>
  
                <p>
                  This portfolio is part of that process — a place to document
                  what I build, what I learn, and how I grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Skills */}
<section id="skills" className="border-t border-rule">
  <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
    <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
          Current toolkit
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Tools and technologies I&apos;m working with.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-rule pt-6 text-base md:grid-cols-3">
          <span>C</span>
          <span>C++</span>
          <span>Data Structures &amp; Algorithms</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Selected Work */}
<section id="work" className="border-t border-rule">
  <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
    <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
          Selected Work
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Projects built to turn ideas into working software.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/70">
          I&apos;m currently building projects that strengthen my
          foundations in software development and prepare me for deeper
          work in AI and machine learning.
        </p>

        <div className="mt-10 border-t border-rule pt-6">
          <p className="text-sm text-ink/60">
            Projects coming soon.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact */}
<section id="contact" className="border-t border-rule">
  <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
    <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
          Contact
        </p>
      </div>

      <div>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-ink/70">
          I&apos;m open to internships, research opportunities,
          collaborations, and interesting technical projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href="mailto:sakshammehla0084@gmail.com"
            className="border-b border-ink pb-1 text-sm font-medium hover:opacity-60"
          >
            Email me →
          </a>

          <a
            href="https://www.linkedin.com/in/saksham-mehla-54746937a"
            target="_blank"
            rel="noreferrer"
            className="border-b border-rule pb-1 text-sm font-medium hover:border-ink"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }