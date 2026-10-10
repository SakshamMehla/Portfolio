export function Work() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
              Work
            </p>
          </div>
  
          <div>
            <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Projects that turn ideas into working software.
            </h1>
  
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
              I&apos;m currently building projects that strengthen my foundations
              in software development and prepare me for deeper work in AI and
              machine learning.
            </p>
  
            <div className="mt-12 border-t border-rule pt-8">
              <p className="text-sm text-ink/60">
                Projects will be added here as I build and complete them.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
