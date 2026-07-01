import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const GridBg: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none select-none">
      {/* Grid Pattern with dynamic scroll translation */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -top-[10%] left-0 w-full h-[120%] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px] opacity-[0.06]"
      />

      {/* Center-focused vignette mask to make grid fade away at corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.95)_95%)]" />

      {/* Ambient background glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-accent-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-accent-purple/5 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] bg-accent-blue/5 rounded-full blur-[100px]" />
    </div>
  )
}
