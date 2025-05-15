"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  attribute?: string
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'system',
  setTheme: () => null,
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = 'data-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      root.setAttribute(attribute, systemTheme)
    } else {
      root.classList.add(theme)
      root.setAttribute(attribute, theme)
    }
  }, [theme, enableSystem, attribute])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
} 