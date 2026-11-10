"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { Code2, Cpu, Layers, Rocket } from "lucide-react"

import { Reveal } from "@/components/ui/reveal"

const VALUES = [
  { icon: Code2, label: "Building modern web applications" },
  {
    icon: Cpu,
    label: "Interest in problem-solving and AI-powered applications",
  },
  { icon: Rocket, label: "Continuous learning and growth as a developer" },
] as const

export function About() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <section
      id="about"
      className="section-wash relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="soft-glow-violet pulse-glow -top-48 -right-40 size-[42rem]" />
        <div className="soft-glow-cyan -bottom-72 left-[15%] size-[36rem]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="section-kicker mb-4 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
              About me
            </p>
            <h2 className="max-w-md font-heading text-4xl font-semibold tracking-[-0.045em] text-balance text-foreground sm:text-5xl">
              Thoughtful software, made with purpose.
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="mt-8 space-y-5 text-base leading-8 text-pretty text-muted-foreground sm:text-lg"
          >
            <p>
              I&apos;m Habibur Rahman, an aspiring Full-Stack Developer
              passionate about building modern web applications that solve
              real-world problems.
            </p>

            <p>
              I enjoy working with React, Next.js, TypeScript, and Node.js to
              create clean, responsive, and user-friendly digital experiences.
            </p>

            <p>
              My development journey is driven by curiosity, continuous
              learning, and a passion for problem-solving. I&apos;m also
              exploring AI-powered solutions and new technologies to grow as a
              developer.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-9 grid gap-3">
            {VALUES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/35 p-3.5 transition-colors hover:border-primary/30 hover:bg-background/60"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent-violet/15 text-primary shadow-sm shadow-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-[1.1rem]" aria-hidden="true" />
                </span>
                <span className="text-sm leading-5 font-medium text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={0.12}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -5 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
            className="glass-card group relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
          >
            <div
              className="absolute -top-20 -right-20 size-56 rounded-full bg-violet-400/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-20 size-56 rounded-full bg-cyan-400/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-5 md:grid-cols-[minmax(0,1.05fr)_minmax(12rem,0.95fr)] md:items-stretch">
              <div className="relative min-h-80 overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-px shadow-[0_22px_42px_-24px_rgb(59_130_246/0.65)] sm:min-h-[26rem]">
                <div className="relative h-full overflow-hidden rounded-[calc(1.45rem-1px)] bg-muted">
                  <Image
                    src="/images/formal_portrait_1.jpeg"
                    alt="Habibur Rahman"
                    fill
                    sizes="(max-width: 767px) min(100vw - 4rem, 28rem), 24rem"
                    className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/30 px-3 py-2.5 text-white backdrop-blur-md">
                    <span className="text-xs font-medium tracking-wide">
                      Habibur Rahman
                    </span>
                    <span
                      className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.95)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-[1.45rem] border border-border/70 bg-background/40 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-5">
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.17em] text-primary uppercase">
                      Approach
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      A full-stack perspective
                    </h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-primary/25">
                    <Layers className="size-[1.1rem]" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                      <span>Interface</span>
                      <span className="text-primary">Clarity</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary/10">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                      <span>Implementation</span>
                      <span className="text-primary">Performance</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary/10">
                      <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                      <span>Iteration</span>
                      <span className="text-primary">Curiosity</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary/10">
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
