import React from "react"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

// Mock font class
const inter = { className: 'font-sans' };

// Mock metadata for documentation
const metadata = {
  title: "Lintense - Modern Landing Page Template",
  description: "A robust, responsive multi-purpose template for your next project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 