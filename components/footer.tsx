"use client"

import { GitBranch, Mail } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/70 bg-background/35 px-4 py-9 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a
          href="#hero"
          className="group flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-[0.65rem] font-bold tracking-[-0.1em] text-white shadow-md shadow-primary/20">
            HR
          </span>
          <span className="text-sm font-semibold text-foreground">
            Habibur Rahman
          </span>
        </a>

        <p className="order-3 text-center text-xs text-muted-foreground sm:order-none">
          © {year} Habibur Rahman. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/habib-71"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Habibur Rahman on GitHub"
            className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <GitBranch className="size-4" aria-hidden="true" />
          </a>
          <a
            href="mailto:mdhabib18005@gmail.com"
            aria-label="Email Habibur Rahman"
            className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
