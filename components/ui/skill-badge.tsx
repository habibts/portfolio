"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

type SkillBadgeProps = {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
      className={cn(
        "flex min-h-10 items-center justify-center rounded-xl border border-border/70 bg-background/35 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200",
        "group hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md hover:shadow-primary/10"
      )}
    >
      <span className="text-muted-foreground transition-colors group-hover:text-primary">
        {label}
      </span>
    </motion.div>
  )
}
