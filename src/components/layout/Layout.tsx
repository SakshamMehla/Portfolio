import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-20 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:underline"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">{children}</main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Saksham Mehla.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/SakshamMehla"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saksham-mehla-54746937a"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sakshammehla0084@gmail.com"
              className="hover:text-ink"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}