"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
)

function getResolvedTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  return theme
}

function applyTheme(resolvedTheme: "light" | "dark") {
  if (typeof document === "undefined") return
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(resolvedTheme)
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }
  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }
      if (event.key.toLowerCase() !== "d") {
        return
      }
      if (isTypingTarget(event.target)) {
        return
      }
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children?: React.ReactNode
  defaultTheme?: Theme
}) {
  // Keep the first client render deterministic. A tiny script in the root layout
  // applies the saved color class before paint, then this effect reconciles state.
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  )

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = localStorage.getItem("theme") as Theme | null
      const nextTheme =
        stored && ["light", "dark", "system"].includes(stored)
          ? stored
          : defaultTheme
      const resolved = getResolvedTheme(nextTheme)

      setThemeState(nextTheme)
      setResolvedTheme(resolved)
      applyTheme(resolved)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [defaultTheme])

  React.useEffect(() => {
    if (theme !== "system") return
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const resolved = getResolvedTheme("system")
      setResolvedTheme(resolved)
      applyTheme(resolved)
    }
    media.addEventListener("change", handler)
    return () => {
      media.removeEventListener("change", handler)
    }
  }, [theme])

  const setTheme = React.useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme)
    const nextResolvedTheme = getResolvedTheme(nextTheme)
    setResolvedTheme(nextResolvedTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", nextTheme)
      document.documentElement.classList.add("theme-transitioning")
      applyTheme(nextResolvedTheme)
      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning")
      }, 280)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      <ThemeHotkey />
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
