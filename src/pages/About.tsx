export function About() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
              About Me
            </p>
          </div>
  
          <div>
            <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Computer Science student focused on building strong fundamentals.
            </h1>
  
            <div className="mt-10 space-y-6 text-base leading-8 text-ink/70">
              <p>
                I&apos;m Saksham Mehla, a Computer Science student at Thapar
                Institute of Engineering and Technology.
              </p>
  
              <p>
                I enjoy solving problems, understanding how software works, and
                turning ideas into practical applications. My current focus is
                strengthening my skills in programming, data structures and
                algorithms, and software development.
              </p>
  
              <p>
                I&apos;m also exploring artificial intelligence and machine
                learning, with the goal of gradually building projects that
                combine strong software foundations with intelligent systems.
              </p>
            </div>
  
            <div className="mt-14 border-t border-rule pt-8">
              <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
                Education
              </p>
  
              <div className="mt-5">
                <h2 className="text-xl font-medium">
                  Thapar Institute of Engineering and Technology
                </h2>
                <p className="mt-2 text-sm text-ink/60">
                  Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-rule pt-8">
  <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
    Currently
  </p>

  <div className="mt-5 space-y-4 text-base leading-7 text-ink/70">
    <p>
      Strengthening my foundations in C++, data structures and algorithms,
      and software development.
    </p>

    <p>
      Exploring artificial intelligence and machine learning while building
      projects to apply what I learn.
    </p>

    <p>
      Open to internships, research opportunities, and meaningful
      collaborations.
    </p>
  </div>
</div>
      </section>
    )
  }
