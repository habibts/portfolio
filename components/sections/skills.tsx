"use client"

import type { ElementType } from "react"
import { Code2, Database, FileCode2, GitBranch, Layers } from "lucide-react"

import { Reveal } from "@/components/ui/reveal"
import { SectionTitle } from "@/components/ui/section-title"
import { SkillBadge } from "@/components/ui/skill-badge"
import { SKILL_CATEGORIES } from "@/data/skills"
import { cn } from "@/lib/utils"

const CATEGORY_ICONS: Record<string, { Icon: ElementType; accent: string }> = {
  Frontend: {
    Icon: Code2,
    accent: "from-sky-500/20 to-blue-500/10 text-blue-600 dark:text-sky-300",
  },
  Backend: {
    Icon: Layers,
    accent:
      "from-indigo-500/20 to-violet-500/10 text-indigo-600 dark:text-violet-300",
  },
  Database: {
    Icon: Database,
    accent: "from-cyan-500/20 to-teal-500/10 text-cyan-700 dark:text-cyan-300",
  },
  Tools: {
    Icon: GitBranch,
    accent:
      "from-violet-500/20 to-fuchsia-500/10 text-violet-600 dark:text-violet-300",
  },
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="soft-glow-blue pulse-glow -bottom-52 -left-44 size-[44rem]" />
        <div className="soft-glow-violet top-20 right-[8%] size-[26rem]" />
      </div>

      <SectionTitle
        title="Skills & tools"
        description="Technologies and tools I work with to build modern applications."
      />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => {
          const { Icon, accent } = CATEGORY_ICONS[category.title] ?? {
            Icon: FileCode2,
            accent: "from-muted to-muted text-muted-foreground",
          }

          return (
            <Reveal
              key={category.title}
              delay={index * 0.06}
              className="h-full"
            >
              <article className="glass-card group relative h-full overflow-hidden rounded-[1.7rem] p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-7">
                <div
                  className="absolute top-0 right-0 size-28 translate-x-10 -translate-y-10 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-4">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl bg-gradient-to-br shadow-lg shadow-primary/10",
                      accent
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.17em] text-muted-foreground uppercase">
                      Toolkit
                    </p>
                    <h3 className="mt-0.5 text-xl font-semibold tracking-tight text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="relative mt-7 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
