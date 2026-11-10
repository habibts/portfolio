import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ElementRefProvider } from "@/components/ui/element-ref"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const themeScript = `
  try {
    const stored = localStorage.getItem("theme");
    const theme = stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
    const resolved = theme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
  } catch (_) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-svh">
        <ThemeProvider>
          <ElementRefProvider>{children}</ElementRefProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
