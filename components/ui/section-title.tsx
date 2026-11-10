"use client"

import { Reveal } from "@/components/ui/reveal"

export function SectionTitle({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
      <Reveal className="flex flex-col items-center">
        <span className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
          Explore
        </p>
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.045em] text-balance text-foreground md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal
          delay={0.08}
          className="mx-auto mt-5 max-w-lg text-base leading-7 text-pretty text-muted-foreground sm:text-lg"
        >
          {description}
        </Reveal>
      )}
    </div>
  )
}
