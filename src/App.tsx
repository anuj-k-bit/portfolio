import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Loader } from "./components/layout/Loader"
import { GridBg } from "./components/layout/GridBg"
import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {
  const [loading, setLoading] = React.useState(true)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    if (loading) return

    const sections = ["home", "about", "skills", "experience", "projects", "contact"]
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px", // Activates tab when section reaches center of screen
        }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el)
        }
      })
    }
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-white overflow-hidden selection:bg-accent-cyan/30 selection:text-white"
        >
          {/* Animated Background */}
          <GridBg />

          {/* Bottom Floating Menu */}
          <Navbar activeSection={activeSection} />

          {/* Main Layout Sections */}
          <main className="relative z-10 px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="relative z-10 py-16 border-t border-white/5 bg-black/40 text-center font-heading text-[10px] sm:text-xs text-neutral-500 max-w-6xl mx-auto px-4 mt-16 mb-28">
            <p className="mb-2 uppercase tracking-[0.25em] text-neutral-400">
              © {new Date().getFullYear()} Anuj Kekre. All Rights Reserved.
            </p>
            <p className="font-body text-neutral-600">
              Designed &amp; Engineered with React 19, Vite 7, and Tailwind CSS.
            </p>
          </footer>
        </motion.div>
      )}
    </>
  )
}

export default App
