import * as React from "react"
import { motion } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const duration = 2000 // 2 seconds
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400) // Small delay before transition
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG drawing logo */}
      <div className="relative mb-6">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#loaderGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 270 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Coding symbols inside </ > */}
          <motion.path
            d="M38 42L28 50L38 58"
            stroke="#06b6d4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M62 42L72 50L62 58"
            stroke="#a855f7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M54 38L46 62"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          />
          
          <defs>
            <linearGradient id="loaderGradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Numerical Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple"
      >
        {Math.floor(count).toString().padStart(3, "0")}%
      </motion.div>

      {/* Tech line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-xs uppercase tracking-[0.25em] font-heading text-neutral-400"
      >
        Initializing Portfolio...
      </motion.div>
    </div>
  )
}
