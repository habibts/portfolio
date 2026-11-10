"use client"

import { createContext, useCallback, useContext, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

type Toast = { id: string; message: string }

const ElementRefContext = createContext<{
  showToast: (message: string) => void
} | null>(null)

export function ElementRefProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toast, setToast] = useState<Toast | null>(null)
  const reduceMotion = useReducedMotion() ?? false

  const showToast = useCallback((message: string) => {
    const id = Math.random().toString(36).slice(2)
    setToast({ id, message })
    setTimeout(() => setToast(null), 1800)
  }, [])

  return (
    <ElementRefContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-background border border-border shadow-lg text-[0.65rem] font-medium text-foreground backdrop-blur-sm"
        >
          {toast.message}
        </motion.div>
      )}
    </ElementRefContext.Provider>
  )
}

export function useElementRef() {
  const ctx = useContext(ElementRefContext)
  if (!ctx) {
    throw new Error("useElementRef must be used within ElementRefProvider")
  }
  return ctx
}

interface ElementRefProps {
  refId: string
  children: React.ReactNode
  className?: string
}

export function ElementRef({
  refId,
  children,
  className,
}: ElementRefProps) {
  const { showToast } = useElementRef()

  const handleClick = () => {
    navigator.clipboard.writeText(`[data-ref="${refId}"]`)
    showToast(`Added "${refId}" to chat reference`)
  }

  return (
    <span
      data-ref={refId}
      className={cn("inline-flex cursor-pointer select-none", className)}
      onClick={handleClick}
    >
      {children}
    </span>
  )
}
