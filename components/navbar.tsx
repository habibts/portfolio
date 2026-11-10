"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Menu, Monitor, Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const

const THEMES = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
] as const

function ThemeSelector({ compact = false }: { compact?: boolean }) {
  const { setTheme, theme } = useTheme()

  return (
    <div
      aria-label="Choose color theme"
      className={cn(
        "inline-flex items-center rounded-xl border border-border/80 bg-background/45 p-1 shadow-sm",
        compact && "w-full justify-between"
      )}
    >
      {THEMES.map(({ value, label, Icon }) => {
        const active = theme === value
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
              compact && "flex-1",
              active
                ? "bg-gradient-to-br from-primary to-accent-violet text-primary-foreground shadow-md shadow-primary/25"
                : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
            title={`${label} theme`}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            <span className={cn(!compact && "sr-only xl:not-sr-only")}>
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("hero")
  const navRef = React.useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion() ?? false

  React.useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(
      (section): section is HTMLElement => section instanceof HTMLElement
    )
    if (!sections.length) return

    let frame: number | undefined

    const updateActiveSection = () => {
      frame = undefined
      const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 64
      const activationLine = navbarHeight + 20
      const current = sections.reduce<HTMLElement>((active, section) => {
        return section.getBoundingClientRect().top <= activationLine
          ? section
          : active
      }, sections[0])

      setActiveSection(current.id)
    }

    const requestUpdate = () => {
      if (frame !== undefined) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    requestUpdate()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      if (frame !== undefined) window.cancelAnimationFrame(frame)
    }
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 h-[var(--navbar-height)] border-b border-border/70 bg-background/35 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#hero"
          aria-label="Habibur Rahman — home"
          whileHover={reduceMotion ? undefined : { y: -1 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="group flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 text-sm font-bold tracking-[-0.12em] text-white shadow-lg shadow-indigo-500/25">
            <span
              className="absolute inset-px rounded-[0.65rem] border border-white/25"
              aria-hidden="true"
            />
            <span className="relative">HR</span>
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Habibur Rahman
            </span>
            <span className="text-[0.62rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Full-stack developer
            </span>
          </span>
        </motion.a>

        <div className="hidden items-center gap-1 lg:flex">
          <div className="flex items-center gap-0.5 rounded-xl bg-muted/25 p-1">
            {NAV_LINKS.map((link) => {
              const active = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-link"
                      className="absolute inset-0 -z-10 rounded-lg bg-background/80 shadow-sm ring-1 ring-border/70"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                  {link.label}
                </a>
              )
            })}
          </div>
          <span className="mx-3 h-6 w-px bg-border" aria-hidden="true" />
          <ThemeSelector />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSelector />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              className="grid size-10 place-items-center rounded-xl border border-border bg-background/50 text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(22rem,calc(100vw-1.5rem))] border-border bg-background/85 p-5 backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-border/70 pb-5 text-left">
                <SheetTitle className="text-sm font-semibold">
                  Navigate
                </SheetTitle>
              </SheetHeader>
              <div className="mt-5 grid gap-1">
                {NAV_LINKS.map((link) => {
                  const active = activeSection === link.href.slice(1)
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center rounded-xl px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Appearance
                </p>
                <ThemeSelector compact />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
