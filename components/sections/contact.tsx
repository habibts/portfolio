"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
} from "lucide-react"

import { Reveal } from "@/components/ui/reveal"
import {
  EMAIL_ADDRESS,
  EMAIL_CONTACT_LINK,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/data/social-links"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const reduceMotion = useReducedMotion() ?? false

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="section-wash relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="soft-glow-blue pulse-glow top-[5%] -right-44 size-[45rem]" />
        <div className="soft-glow-violet -bottom-64 left-0 size-[38rem]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.045em] text-balance text-foreground sm:text-5xl">
            Let&apos;s make something meaningful.
          </h2>
          <p className="mt-5 text-base leading-7 text-pretty text-muted-foreground sm:text-lg">
            Have a project in mind or want to collaborate? Choose a channel
            below and let&apos;s start a conversation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <Reveal delay={0.06} className="h-full">
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="glass-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
            >
              <div
                className="absolute -top-16 -right-16 size-44 rounded-full bg-primary/15 blur-3xl"
                aria-hidden="true"
              />
              <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-primary/25">
                <a href={EMAIL_CONTACT_LINK} className="block">
                  <Mail className="size-5" aria-hidden="true" />
                </a>
              </span>
              <p className="relative mt-6 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                Email
              </p>
              <h3 className="relative mt-2 text-xl font-semibold tracking-tight text-foreground">
                Start a conversation
              </h3>
              <a
                href={EMAIL_CONTACT_LINK}
                className="relative mt-4 w-fit text-sm font-medium break-all text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {EMAIL_ADDRESS}
              </a>
              <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <a
                href={EMAIL_CONTACT_LINK}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                Send an email
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border/80 bg-background/45 px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  {copied ? (
                    <Check
                      className="size-4 text-emerald-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  {copied ? "Copied" : "Copy email"}
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {copied ? "Email address copied to clipboard" : ""}
                </span>
              </div>
            </motion.article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <motion.a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="glass-card group flex h-full flex-col rounded-[1.75rem] p-6 transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none sm:p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-foreground text-background shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950">
                <img
                  src="/images/github.jpg"
                  alt="GitHub"
                  className="size-5 rounded-full object-cover"
                  aria-hidden="true"
                />
              </span>
              <p className="mt-6 text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Social
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                GitHub
              </h3>
              <span className="mt-auto inline-flex min-h-10 items-end gap-2 pt-7 text-sm font-semibold text-primary">
                View profile
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          </Reveal>

          <Reveal delay={0.18} className="h-full">
            <motion.a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="glass-card group flex h-full flex-col rounded-[1.75rem] p-6 transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none sm:p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="size-6 rounded-full object-cover"
                  aria-hidden="true"
                />
              </span>
              <p className="mt-6 text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Social
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                LinkedIn
              </h3>
              <span className="mt-auto inline-flex min-h-10 items-end gap-2 pt-7 text-sm font-semibold text-primary">
                View profile
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
