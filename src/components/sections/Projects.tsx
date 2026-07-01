import * as React from "react"
import { motion } from "framer-motion"
import { GlowingCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { ExternalLink, FolderGit2, Calendar, CheckCircle2 } from "lucide-react"

interface Project {
  id: number
  title: string
  url: string
  displayUrl: string
  date: string
  description: string
  highlights: string[]
  tags: string[]
  glowColor: string
  borderColor: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "CollabSheet – Real-Time Collaborative Spreadsheet",
    url: "https://collab-sheet-alpha.vercel.app",
    displayUrl: "collab-sheet-alpha.vercel.app",
    date: "Mar 2026",
    description: "A high-performance real-time collaborative spreadsheet application built with a modern client-side model and robust database security rules.",
    highlights: [
      "Built using vanilla JavaScript (ES modules) + Vite and powered by Supabase (Postgres, Auth, Realtime, and Presence).",
      "Implemented database Row-Level Security (RLS) to enforce collaborator roles (viewer, editor, owner).",
      "Engineered live cursor tracking and presence broadcasts to update active cells without page refreshes.",
      "Implemented a custom formula engine (SUM, cell references, and arithmetic expressions) on a 50x26 cell grid."
    ],
    tags: ["Vanilla JS", "Vite", "Supabase", "Row-Level Security", "Postgres", "Realtime API", "Formula Engine"],
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "hover:border-accent-cyan/30"
  },
  {
    id: 2,
    title: "IPL Win Predictor Dashboard",
    url: "https://ipl-predictor-kxnj.vercel.app",
    displayUrl: "ipl-predictor-kxnj.vercel.app",
    date: "Jun 2026",
    description: "A full-stack predictive analytics dashboard that calculates and visualizes live cricket match win probabilities.",
    highlights: [
      "Trained a Scikit-Learn logistic regression model on historical ball-by-ball IPL dataset.",
      "Designed a live interactive simulator that recalculates win probabilities in real-time based on score, wickets, and overs.",
      "Integrated analytics panels displaying venue historical statistics, head-to-head match histories, and player-impact data.",
      "Built with React + TypeScript + Recharts on the frontend, and a Flask/Pandas/NumPy API backend."
    ],
    tags: ["React", "TypeScript", "Recharts", "Flask", "Python", "Scikit-Learn", "Pandas", "Logistic Regression"],
    glowColor: "rgba(168, 85, 247, 0.15)",
    borderColor: "hover:border-accent-purple/30"
  }
]

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto select-none">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          FEATURED PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mx-auto font-body text-base"
        >
          A selection of full-stack engineering and data analytics applications showcasing my problem-solving approach.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="h-full"
            >
              <GlowingCard
                glowColor={project.glowColor}
                borderColor={`border-white/5 ${project.borderColor}`}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-neutral-400 border-white/5 flex items-center gap-1.5 py-1 px-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-heading font-bold text-white mb-2 leading-snug">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-400 font-body leading-relaxed text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="py-2">
                    <div className="mb-6">
                      <h4 className="text-xs font-heading font-semibold text-accent-purple tracking-widest uppercase mb-3">
                        Key Architecture & Features
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-sm text-neutral-400 font-body flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-heading font-semibold text-accent-cyan tracking-widest uppercase mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-neutral-900/60 border-white/5 text-neutral-300 font-body text-[11px] py-1 px-2.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-6 border-t border-white/5 mt-6">
                  <Button
                    variant="glow"
                    className="w-full flex items-center justify-center gap-2 group text-sm py-5"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </CardFooter>
              </GlowingCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
