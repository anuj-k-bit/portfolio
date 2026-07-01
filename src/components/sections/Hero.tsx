import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Mail, ArrowUpRight } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

const taglines = [
  "Computer Science Undergraduate",
  "Full-Stack Developer",
  "Security-Focused Builder",
  "Data-Driven Analyst",
  "100+ LeetCode Problem Solver",
]

export const Hero: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [reverse, setReverse] = React.useState(false)

  // Typewriter effect
  React.useEffect(() => {
    if (subIndex === taglines[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % taglines.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 30 : 65)

    return () => clearTimeout(timeout)
  }, [subIndex, reverse, index])

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 20
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 select-none"
    >
      <div className="absolute top-[20%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-xs font-heading tracking-widest uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        Available for Honeywell Internship
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-6 uppercase bg-clip-text bg-gradient-to-b from-white to-neutral-300"
      >
        ANUJ KEKRE
      </motion.h1>

      {/* Animated Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-12 text-lg sm:text-2xl font-body text-neutral-400 max-w-2xl px-2 mb-12"
      >
        <span>I'm a </span>
        <span className="text-white border-r-2 border-accent-cyan pr-1 font-heading font-bold text-accent-cyan">
          {taglines[index].substring(0, subIndex)}
        </span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <Button
          variant="glow"
          size="lg"
          onClick={() => handleScroll("projects")}
          className="group flex items-center gap-2"
        >
          View Projects
          <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open("/Anuj_Kekre_Resume.pdf", "_blank")}
          className="border-white/10 hover:border-white/20 text-neutral-200"
        >
          View Resume
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleScroll("contact")}
          className="border-white/10 hover:border-white/20 text-neutral-200"
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Social links row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center gap-8 text-neutral-500"
      >
        <a
          href="https://github.com/anuj-k-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-cyan hover:scale-110 transition-all duration-300"
          title="GitHub"
        >
          <IconBrandGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-kekre-676b582b3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-purple hover:scale-110 transition-all duration-300"
          title="LinkedIn"
        >
          <IconBrandLinkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:anujkekre04@gmail.com"
          className="hover:text-accent-blue hover:scale-110 transition-all duration-300"
          title="Email"
        >
          <Mail className="w-6.5 h-6.5" />
        </a>
      </motion.div>
    </section>
  )
}
