export function Contact() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm tracking-[0.18em] text-ink/60 uppercase">
              Contact
            </p>
          </div>
  
          <div>
            <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Let&apos;s connect.
            </h1>
  
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
              I&apos;m open to internships, research opportunities,
              collaborations, and interesting technical projects.
            </p>
  
            <div className="mt-12 space-y-5 border-t border-rule pt-8">
              <a
                href="mailto:sakshammehla0084@gmail.com"
                className="block text-lg font-medium hover:opacity-60"
              >
                sakshammehla0084@gmail.com
              </a>
  
              <a
                href="https://www.linkedin.com/in/saksham-mehla-54746937a"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-ink/60 hover:text-ink"
              >
                LinkedIn ↗
              </a>
  
              <a
                href="https://github.com/SakshamMehla"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-ink/60 hover:text-ink"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }