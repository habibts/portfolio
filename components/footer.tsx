"use client"

import { motion, useReducedMotion } from "motion/react"
import { Mail } from "lucide-react"

import { ElementRef } from "@/components/ui/element-ref"

import {
  EMAIL_CONTACT_LINK,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/data/social-links"

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: GITHUB_PROFILE_URL,
    icon: "/images/github.jpg",
    external: true,
  },
  { label: "Email", href: EMAIL_CONTACT_LINK, icon: Mail, external: true },
  {
    label: "LinkedIn",
    href: LINKEDIN_PROFILE_URL,
    icon: "/images/linkedin.png",
    external: true,
  },
] as const

export function Footer() {
  const year = new Date().getFullYear()
  const reduceMotion = useReducedMotion() ?? false

  return (
    <footer className="relative border-t border-border/70 bg-background/40 px-4 py-8 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
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

        <div className="flex items-center gap-1 rounded-xl border border-border/70 bg-background/35 p-1 shadow-sm">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={
                external
                  ? `Visit Habibur Rahman on ${label}`
                  : "Email Habibur Rahman"
              }
              title={label}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              {typeof Icon === "string" ? (
  <img
    src={Icon}
    alt={label}
    className="size-5 rounded-full object-cover"
    aria-hidden="true"
  />
) : (
  <ElementRef refId="footer-email-logo">
    <Icon className="size-4" aria-hidden="true" />
  </ElementRef>
)}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
