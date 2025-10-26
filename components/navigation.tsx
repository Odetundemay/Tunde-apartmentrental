"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Luxury Stays
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/apartments" className="text-foreground hover:text-primary transition">
              Apartments
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Button asChild>
              <Link href="/apartments">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Home
            </Link>
            <Link href="/apartments" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Apartments
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/apartments">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
