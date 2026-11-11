"use client"

import { motion, useReducedMotion } from "motion/react"
import { Download, FileText, Sparkles } from "lucide-react"

import { Reveal } from "@/components/ui/reveal"

export function Resume() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <section
      id="resume"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="soft-glow-cyan pulse-glow -right-44 -bottom-56 size-[47rem]" />
        <div className="soft-glow-violet top-24 left-[10%] size-[27rem]" />
      </div>

      <Reveal className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgb(99_102_241/0.14),transparent_30%),radial-gradient(circle_at_8%_88%,rgb(34_211_238/0.12),transparent_28%)]"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-5 sm:gap-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 text-white shadow-xl shadow-primary/25 sm:size-16">
                <FileText className="size-7" aria-hidden="true" />
              </span>
              <div>
                <p className="section-kicker text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  Resume
                </p>
                <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-balance text-foreground sm:text-4xl">
                  A closer look at my background.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-muted-foreground">
                  Download my CV to learn more about my background and
                  experience as a Full-Stack Developer.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1.5">
                    <Sparkles
                      className="size-3 text-primary"
                      aria-hidden="true"
                    />
                    Curriculum vitae
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5">
                    PDF format
                  </span>
                </div>
              </div>
            </div>

            <motion.a
              href="/Habibur_Rahman_Resume.pdf"
              download="Habibur_Rahman_Resume.pdf"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_-15px_rgb(79_70_229/0.85)] transition-shadow hover:shadow-[0_20px_44px_-12px_rgb(79_70_229/0.95)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
