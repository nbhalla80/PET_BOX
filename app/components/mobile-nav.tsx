"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Listen for toggle-menu events
  useEffect(() => {
    const handleToggleMenu = () => {
      setIsOpen((prev) => !prev)
    }

    window.addEventListener("toggle-menu", handleToggleMenu)

    return () => {
      window.removeEventListener("toggle-menu", handleToggleMenu)
    }
  }, [])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#how-it-works"
                    className="block py-2 text-lg hover:text-primary-teal transition-colors"
                    onClick={closeMenu}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#whats-inside"
                    className="block py-2 text-lg hover:text-primary-teal transition-colors"
                    onClick={closeMenu}
                  >
                    What's Inside
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="block py-2 text-lg hover:text-primary-teal transition-colors"
                    onClick={closeMenu}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block py-2 text-lg hover:text-primary-teal transition-colors"
                    onClick={closeMenu}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
            <div className="p-4 border-t">
              <Button className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

