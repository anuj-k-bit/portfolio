import * as React from "react"
import { motion } from "framer-motion"
import { GraduationCap, BrainCircuit, Terminal } from "lucide-react"
import { GlowingCard, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/Card"

interface Panel {
  id: number
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  content: string[]
}

const panels: Panel[] = [
  {
    id: 1,
    title: "As a Student",
    subtitle: "CS Undergrad @ VIT Bhopal",
    icon: GraduationCap,
    color: "rgba(6, 182, 212, 0.15)", // cyan glow
    content: [
      "Final-year B.Tech CSE student at VIT Bhopal (Sep 2023 – Expected May 2027) with a CGPA of 8.33/10.0.",
      "Coursework in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Machine Learning, and Deep Learning.",
      "AWS Certified AI Practitioner, with Oracle certifications in Cloud Observability and Agentic AI."
    ]
  },
  {
    id: 2,
    title: "As a Problem Solver",
    subtitle: "Algorithms & DSA Practitioner",
    icon: BrainCircuit,
    color: "rgba(168, 85, 247, 0.15)", // purple glow
    content: [
      "Solved 255 DSA problems across LeetCode (175) and GeeksforGeeks (80).",
      "Led PR for VIT Bhopal's Blockchain, Linux and Startup clubs, reaching 200+ students; Event & Discipline Head of the Fashion Club.",
      "Measures what I build: RAGAS evaluations, golden test sets, and comparisons against baselines."
    ]
  },
  {
    id: 3,
    title: "As a Builder",
    subtitle: "AI & Python Backend Engineer",
    icon: Terminal,
    color: "rgba(59, 130, 246, 0.15)", // blue glow
    content: [
      "Builds LLM agents, semantic search, and evaluation pipelines, and ships them as Python backends with FastAPI, Flask, and Docker.",
      "Built 7 FastAPI microservices and 4 guardrailed AI agents during my internship at MPOnline Limited.",
      "Projects span agentic RAG, demand forecasting, computer vision, and real-time industrial recommendations."
    ]
  }
]

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto select-none">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          ABOUT ME
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mx-auto font-body text-base"
        >
          A brief overview of my journey as a student, analytical problem solver, and system builder.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {panels.map((panel, idx) => {
          const Icon = panel.icon
          return (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="h-full"
            >
              <GlowingCard
                glowColor={panel.color}
                className="h-full border-white/5 hover:border-accent-cyan/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-accent-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">{panel.title}</CardTitle>
                      <CardDescription className="text-xs">{panel.subtitle}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-4">
                      {panel.content.map((point, pIdx) => (
                        <li key={pIdx} className="text-sm text-neutral-400 font-body flex items-start gap-2 leading-relaxed">
                          <span className="text-accent-purple font-bold mt-1 text-xs">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </GlowingCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
