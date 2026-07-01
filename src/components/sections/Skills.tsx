import * as React from "react"
import { motion } from "framer-motion"
import { GlowingCard, CardHeader, CardTitle, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Database, ShieldAlert, Code2, Cpu } from "lucide-react"

interface SkillGroup {
  category: string
  icon: React.ComponentType<{ className?: string }>
  glowColor: string
  borderColor: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Data",
    icon: Database,
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "hover:border-accent-cyan/30",
    skills: ["C++", "Python", "JavaScript", "Java", "SQL", "TypeScript", "Pandas", "NumPy", "Scikit-Learn", "Data Analysis & Reporting"]
  },
  {
    category: "Frontend & Backend",
    icon: Code2,
    glowColor: "rgba(168, 85, 247, 0.15)",
    borderColor: "hover:border-accent-purple/30",
    skills: ["React.js", "Vanilla JS (ES Modules)", "Vite", "REST APIs", "HTML5/CSS3", "Supabase (Postgres, Auth, Realtime)", "JSON"]
  },
  {
    category: "Tools & Research",
    icon: ShieldAlert,
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "hover:border-accent-blue/30",
    skills: ["Git/GitHub", "Linux", "VS Code", "Wireshark", "Splunk (SIEM)", "MATLAB", "Excel-based reporting"]
  },
  {
    category: "Core Computer Science",
    icon: Cpu,
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "hover:border-accent-cyan/30",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management (DBMS)", "Computer Networks", "System Design"]
  }
]

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto select-none">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          TECHNICAL SKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mx-auto font-body text-base"
        >
          A categorized taxonomy of programming languages, frameworks, developer tools, and academic computer science fundamentals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlowingCard
                glowColor={group.glowColor}
                borderColor={`border-white/5 ${group.borderColor}`}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="flex flex-row items-center gap-3.5 pb-4">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-accent-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg font-heading">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={idx % 2 === 0 ? "glow" : "glowPurple"}
                          className="text-xs py-1.5 px-3.5 border-white/5 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
