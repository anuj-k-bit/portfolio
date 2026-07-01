import * as React from "react"
import { motion } from "framer-motion"
import { Home, User, Code, GraduationCap, FolderGit2, Mail } from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
]

interface NavbarProps {
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Offset slightly to account for centering or padding
      const offset = 20
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] md:max-w-2xl">
      <div className="flex items-center justify-between gap-0.5 p-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.01)]">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="relative flex flex-col sm:flex-row items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-heading font-medium tracking-wide transition-colors outline-none select-none"
              style={{
                color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
              }}
            >
              {/* Sliding Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan/15 to-accent-purple/15 border border-accent-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 z-10" />
              <span className="hidden sm:inline z-10">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
