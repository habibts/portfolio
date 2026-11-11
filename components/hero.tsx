"use client"

import { motion, useReducedMotion } from "motion/react"
import {
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Command,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"

import {
  EMAIL_CONTACT_LINK,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/data/social-links"

const HERO_SOCIALS = [
  {
    label: "GitHub",
    href: GITHUB_PROFILE_URL,
    icon: "/images/github.jpg",
    external: true,
  },
  { label: "Email", href: EMAIL_CONTACT_LINK, icon: Mail, external: false },
  {
    label: "LinkedIn",
    href: LINKEDIN_PROFILE_URL,
    icon: "/images/linkedin.png",
    external: true,
  },
] as const

const codeLines = [
  {
    number: "01",
    content: (
      <>
        <span className="text-violet-400">const</span>{" "}
        <span className="text-sky-400">developer</span>{" "}
        <span className="text-muted-foreground">=</span>{" "}
        <span className="text-foreground">{"{"}</span>
      </>
    ),
  },
  {
    number: "02",
    content: (
      <>
        <span className="pl-4 text-sky-400">name</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-emerald-400">&quot;Habibur Rahman&quot;</span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  {
    number: "03",
    content: (
      <>
        <span className="pl-4 text-sky-400">focus</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-foreground">[</span>
        <span className="text-emerald-400">&quot;web&quot;</span>
        <span className="text-muted-foreground">,</span>{" "}
        <span className="text-emerald-400">&quot;experience&quot;</span>
        <span className="text-foreground">],</span>
      </>
    ),
  },
  {
    number: "04",
    content: (
      <>
        <span className="pl-4 text-sky-400">status</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-emerald-400">&quot;building&quot;</span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  { number: "05", content: <span className="text-foreground">{"}"}</span> },
  { number: "06", content: <span>&nbsp;</span> },
  {
    number: "07",
    content: (
      <>
        <span className="text-violet-400">export default</span>{" "}
        <span className="text-sky-400">developer</span>
        <span className="text-muted-foreground">;</span>
      </>
    ),
  },
]

function getEntrance(reduceMotion: boolean, delay = 0) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }
}

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false
  const floatingAnimation = reduceMotion
    ? undefined
    : {
        y: [0, -12, 0],
        rotate: [0, 1.5, 0],
      }

  return (
    <section
      id="hero"
      className="hero-premium-background relative isolate flex min-h-[calc(100svh-64px)] items-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-10"
    >
      <div
        className="hero-premium-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 36, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb hero-orb-blue -top-40 -left-32 h-[34rem] w-[34rem]"
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -40, 0], y: [0, -24, 0], scale: [1.04, 0.94, 1.04] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="hero-orb hero-orb-violet top-[-8%] -right-36 h-[39rem] w-[39rem]"
        />
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 26, 0], y: [0, -14, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="hero-orb hero-orb-cyan bottom-[-22rem] left-[22%] h-[42rem] w-[42rem]"
        />
        <div className="hero-spotlight top-[24%] left-[32%] h-72 w-72" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 xl:gap-14">
        <div className="relative z-10 max-w-2xl lg:pb-4">
          <motion.div
            {...getEntrance(reduceMotion, 0.05)}
            className="hero-glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 shadow-lg shadow-sky-500/10"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400/75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            </span>
            <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/80 uppercase">
              Full-stack developer
            </span>
            <Sparkles className="size-3.5 text-violet-400" aria-hidden="true" />
          </motion.div>

          <motion.h1
            {...getEntrance(reduceMotion, 0.12)}
            className="mt-7 max-w-[19ch] font-heading text-[clamp(3rem,5vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-balance text-foreground sm:mt-8"
          >
            Building digital{" "}
            <span className="hero-gradient-text">experiences</span> that move
            ideas forward.
          </motion.h1>

          <motion.p
            {...getEntrance(reduceMotion, 0.23)}
            className="mt-7 max-w-xl text-base leading-8 text-pretty text-muted-foreground sm:text-lg"
          >
            Crafting clean, performant, and thoughtfully designed web
            applications that solve real problems.
          </motion.p>

          <motion.div
            {...getEntrance(reduceMotion, 0.32)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(79,70,229,0.8)] transition-shadow hover:shadow-[0_18px_42px_-10px_rgba(79,70,229,0.95)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
              <Mail className="relative size-4" aria-hidden="true" />
              <span className="relative">Get in Touch</span>
              <ArrowUpRight
                className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="hero-glass group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-foreground shadow-lg shadow-slate-950/5 transition-[box-shadow,border-color] hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <Code2
                className="size-4 text-primary transition-transform duration-300 group-hover:rotate-[-8deg]"
                aria-hidden="true"
              />
              View Projects
              <ArrowUpRight
                className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>

          <motion.div
            {...getEntrance(reduceMotion, 0.42)}
            className="mt-6 flex items-center gap-2"
          >
            <span className="mr-1 text-xs font-medium text-muted-foreground">
              Connect
            </span>
            {HERO_SOCIALS.map(({ label, href, icon: Icon, external }) => {
              const iconElement =
                typeof Icon === "string" ? (
                  <img
                    src={Icon}
                    alt={label}
                    className="size-5 rounded-full object-cover"
                    aria-hidden="true"
                  />
                ) : (
                  <Icon className="size-4" aria-hidden="true" />
                )
              return (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={`${external ? "Visit" : "Email"} Habibur Rahman${external ? ` on ${label}` : ""}`}
                  title={label}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                  className="hero-glass grid size-9 place-items-center rounded-xl text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  {iconElement}
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[27rem] w-full sm:min-h-[32rem] lg:min-h-[33rem]"
        >
          <div
            className="hero-visual-halo absolute inset-[11%] rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="hero-dot-grid absolute inset-[8%] rounded-[2.5rem]"
            aria-hidden="true"
          />

          <motion.div
            animate={floatingAnimation}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-elevated-card absolute top-0 left-0 z-30 w-[10.5rem] rounded-2xl p-3.5 sm:w-48 sm:p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
                <Braces className="size-4" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[0.6rem] font-bold tracking-[0.1em] text-emerald-500 uppercase dark:text-emerald-300">
                Ready
              </span>
            </div>
            <p className="mt-3 text-xs font-semibold text-foreground sm:text-sm">
              Ideas, shaped in code.
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="h-1.5 w-11 rounded-full bg-cyan-400/80" />
              <span className="h-1.5 w-6 rounded-full bg-violet-400/70" />
            </div>
          </motion.div>

          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -1.5, 0] }
            }
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            whileHover={reduceMotion ? undefined : { y: -5, scale: 1.03 }}
            className="hero-elevated-card absolute top-[7%] right-0 z-30 hidden w-40 rounded-2xl p-3.5 sm:block"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <span className="flex size-7 items-center justify-center rounded-lg bg-violet-500/15 text-violet-500 dark:text-violet-300">
                <Zap className="size-3.5" aria-hidden="true" />
              </span>
              Creative flow
            </div>
            <div className="mt-3 flex items-end gap-1.5">
              {[30, 52, 40, 68, 55, 82].map((height) => (
                <span
                  key={height}
                  className="w-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-300"
                  style={{ height }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -5, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="hero-editor-card absolute inset-x-0 top-12 z-20 mx-auto w-[94%] max-w-[35rem] overflow-hidden rounded-[1.7rem] sm:top-14 sm:rounded-[2rem]"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3 sm:px-5">
              <span className="size-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.55)]" />
              <span className="size-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.5)]" />
              <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              <div className="ml-2 flex min-w-0 items-center gap-2 rounded-lg bg-black/10 px-2.5 py-1 text-[0.66rem] text-muted-foreground sm:ml-4 dark:bg-white/5">
                <Code2
                  className="size-3 shrink-0 text-cyan-500 dark:text-cyan-300"
                  aria-hidden="true"
                />
                <span className="truncate">developer.ts</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-[0.6rem] font-medium text-emerald-600 dark:text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span className="hidden sm:inline">synced</span>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 py-5 font-mono text-[0.63rem] leading-6 sm:px-6 sm:py-7 sm:text-xs sm:leading-7">
              <div className="text-right text-slate-400/60 select-none dark:text-slate-500/80">
                {codeLines.map(({ number }) => (
                  <div key={number}>{number}</div>
                ))}
              </div>
              <code className="min-w-0 overflow-hidden text-[0.62rem] whitespace-nowrap sm:text-xs">
                {codeLines.map(({ number, content }) => (
                  <div key={number}>{content}</div>
                ))}
              </code>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.035] px-4 py-2.5 text-[0.62rem] text-muted-foreground sm:px-5">
              <span className="flex items-center gap-1.5">
                <Command className="size-3" aria-hidden="true" /> main
              </span>
              <span className="flex items-center gap-1.5">
                <Check
                  className="size-3 text-emerald-500 dark:text-emerald-300"
                  aria-hidden="true"
                />{" "}
                all systems go
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 1.2, 0] }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="hero-elevated-card absolute bottom-[3%] left-[3%] z-30 w-44 rounded-2xl p-3.5 sm:w-52"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-slate-950 text-cyan-300 shadow-lg shadow-slate-950/20 dark:bg-slate-800">
                <Terminal className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.64rem] font-semibold text-foreground">
                  Terminal
                </p>
                <p className="text-[0.58rem] text-muted-foreground">
                  portfolio / active
                </p>
              </div>
            </div>
            <p className="mt-3 font-mono text-[0.62rem] text-emerald-600 dark:text-emerald-300">
              <span className="text-violet-500 dark:text-violet-300">➜</span>{" "}
              create something great_
            </p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
            className="hero-elevated-card absolute right-[1%] bottom-[10%] z-30 hidden w-36 rounded-2xl p-3.5 sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex size-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-500 dark:text-blue-300">
                <span className="absolute size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              </span>
              <span className="text-[0.65rem] font-semibold text-foreground">
                In motion
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
              <span className="block h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
