"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Home, FileText, Github, Linkedin, Twitter, Youtube, Moon, Sun, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="flex items-center gap-2 rounded-full bg-secondary/50 backdrop-blur-md px-2 py-1">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/resume">
            <Button variant="ghost" size="icon" className="rounded-full">
              <FileText className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Youtube className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <div 
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Visitor Count"
          >
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">1,234</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

