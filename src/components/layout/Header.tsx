import { useEffect, useState } from 'react'
import { navItems } from '@/lib/navigation'

const mobileNavId = 'mobile-navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')

    function onViewportChange() {
      if (desktopQuery.matches) {
        setIsMenuOpen(false)
      }
    }

    desktopQuery.addEventListener('change', onViewportChange)
    return () => desktopQuery.removeEventListener('change', onViewportChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // Use system preference.
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* Ignore storage errors. */ }
  }, [theme])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="/"
          className="font-sans text-sm font-medium tracking-[0.18em] text-ink uppercase"
        >
          SAKSHAM MEHLA
        </a>

        <button type="button" onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} className="inline-flex size-10 items-center justify-center rounded-full border border-rule text-ink" aria-label="Toggle color theme" title="Toggle color theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <nav aria-label="Primary" className="hidden md:block">
          <NavList onNavigate={closeMenu} />
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-ink md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={mobileNavId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <nav
        id={mobileNavId}
        aria-label="Primary"
        hidden={!isMenuOpen}
        className="border-t border-rule md:hidden"
      >
        <div className="mx-auto max-w-5xl px-6 py-4">
          <NavList stacked onNavigate={closeMenu} />
        </div>
      </nav>
    </header>
  )
}

function NavList({
  stacked = false,
  onNavigate,
}: {
  stacked?: boolean
  onNavigate: () => void
}) {
  return (
    <ul className={stacked ? 'flex flex-col gap-4' : 'flex items-center gap-8'}>
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-sm tracking-wide text-ink underline-offset-4 hover:underline focus-visible:underline"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <span aria-hidden="true" className="relative block size-4">
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-ink" />
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-ink" />
      </span>
    )
  }

  return (
    <span aria-hidden="true" className="flex size-4 flex-col justify-center gap-1.5">
      <span className="h-px w-full bg-ink" />
      <span className="h-px w-full bg-ink" />
    </span>
  )
}



