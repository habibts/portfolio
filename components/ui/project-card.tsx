"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

type ProjectCardProps = {
  name: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  index: number
  image?: string
}

const PLACEHOLDER_VISUALS: { Icon: LucideIcon; gradient: string }[] = [
  { Icon: Code2, gradient: "from-cyan-400 via-blue-500 to-indigo-600" },
  {
    Icon: ExternalLink,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
  },
  { Icon: GitBranch, gradient: "from-violet-500 via-fuchsia-500 to-cyan-400" },
]

const IMAGE_POSITIONS: Record<string, string> = {
  "/images/projects/studiospace.png": "center center",
  "/images/projects/bazar-dor.png": "center center",
  "/images/projects/dev-stack.png": "center center",
}

function isActualLink(url?: string) {
  if (!url || /^(#|your_|your-|placeholder)/i.test(url)) return false

  try {
    const parsed = new URL(url)
    return parsed.protocol === "https:" || parsed.protocol === "http:"
  } catch {
    return false
  }
}

export function ProjectCard({
  name,
  description,
  technologies,
  github,
  live,
  index,
  image,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion() ?? false
  const placeholder = PLACEHOLDER_VISUALS[index % PLACEHOLDER_VISUALS.length]
  const PlaceholderIcon = placeholder.Icon
  const hasGitHub = isActualLink(github)
  const hasLive = isActualLink(live)

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-[border-color,box-shadow] duration-300 will-change-transform hover:border-primary/35 hover:shadow-[0_24px_55px_-28px_rgb(59_130_246/0.5),0_0_0_1px_rgb(129_140_248/0.12)] dark:hover:shadow-[0_26px_60px_-30px_rgb(0_0_0/0.85),0_0_32px_-18px_rgb(99_102_241/0.5)]"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-border/65 bg-gradient-to-br from-primary/15 via-accent-violet/10 to-cyan-400/15">
        {image ? (
          <Image
            src={image}
            alt={`${name} project preview`}
            fill
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), 24rem"
            priority={index === 0}
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
            style={{ objectPosition: IMAGE_POSITIONS[image] ?? "center" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255/0.55),transparent_32%),radial-gradient(circle_at_80%_85%,rgb(255_255_255/0.2),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgb(125_211_252/0.18),transparent_32%),radial-gradient(circle_at_80%_85%,rgb(167_139_250/0.18),transparent_30%)]" />
            <span
              className={cn(
                "relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-xl shadow-primary/25",
                placeholder.gradient
              )}
            >
              <PlaceholderIcon className="size-6" aria-hidden="true" />
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-slate-950/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-7 text-xl font-semibold tracking-[-0.025em] text-foreground">
          {name}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap content-start gap-1.5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="max-w-full rounded-md border border-border/70 bg-background/40 px-2 py-1 text-[0.66rem] leading-4 font-medium break-words text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        {(hasGitHub || hasLive) && (
          <div className="mt-auto flex items-center gap-2 border-t border-border/65 pt-5">
            {hasGitHub && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border/70 bg-background/35 px-3 text-xs font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <GitBranch className="size-3.5" aria-hidden="true" />
                GitHub
              </motion.a>
            )}
            {hasLive && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-colors hover:bg-primary/85 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                Live demo
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
