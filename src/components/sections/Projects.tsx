import * as React from "react"
import { motion } from "framer-motion"
import { GlowingCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { ExternalLink, FolderGit2, Calendar, CheckCircle2 } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

interface Project {
  id: number
  title: string
  url: string
  displayUrl: string
  linkLabel?: string
  githubUrl?: string
  date?: string
  description: string
  highlights: string[]
  tags: string[]
  glowColor: string
  borderColor: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "NEXUS-RAG: Agentic Document Search API",
    url: "https://neexxus-psnrxhvwqhvhctvpqhmmfp.streamlit.app/",
    displayUrl: "neexxus-psnrxhvwqhvhctvpqhmmfp.streamlit.app",
    githubUrl: "https://github.com/anuj-k-bit/Neexxus",
    description: "An agentic document search API that plans each query, retrieves from Qdrant, reranks the results, and answers with cited sources.",
    highlights: [
      "Built a LangGraph agent whose LLM planner classifies each query, rewrites it for search, and routes it to retrieval or a direct answer, with checkpointed multi-turn memory per conversation thread.",
      "Shipped a FastAPI service with Pydantic-validated query, health, and upload endpoints; uploaded PDF, Word, PowerPoint, HTML, and text files are chunked, embedded, and indexed into Qdrant immediately.",
      "Implemented two-stage semantic search: Gemini embeddings fetch 15 candidates from Qdrant Cloud, and a local FlashRank cross-encoder reranks them to the top 5 cited sources with no reranking API cost.",
      "Made LLM calls fault-tolerant through a Portkey gateway (retries, caching, Llama 3.3 70B to 3.1 8B fallback) and traced requests with Logfire and LangSmith.",
      "Screened 100% of queries with NeMo Guardrails; evaluated quality with 5 RAGAS metrics, a route-selection accuracy metric on a 15-question golden set, and a guardrail confusion matrix."
    ],
    tags: ["Python", "FastAPI", "LangGraph", "Qdrant", "Gemini Embeddings", "FlashRank", "NeMo Guardrails", "Portkey", "RAGAS", "Docker"],
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "hover:border-accent-cyan/30"
  },
  {
    id: 2,
    title: "IntelliVend: AI Vending Platform (Internship Project)",
    url: "https://vendistore-1.onrender.com/docs",
    displayUrl: "vendistore-1.onrender.com/docs",
    linkLabel: "View API Docs",
    githubUrl: "https://github.com/anuj-k-bit/vendistore",
    date: "May 2026 – Jul 2026",
    description: "Backend and machine learning for an AI-driven vending machine fleet, built during my internship at MPOnline.",
    highlights: [
      "Built 7 FastAPI microservices with 26 REST endpoints for orders, inventory, demand forecasting, pricing, vision, and recommendations.",
      "Lowered 7-day demand-forecast MAE by 9.5% through LightGBM lag and rolling-window features; exposed SHAP explanations and drift alerts through the API.",
      "Trained a PyTorch CNN that classifies product-slot fill levels (empty, half, full) from slot images.",
      "Developed a LinUCB contextual-bandit pricing engine and an item-similarity recommender with a popularity-based cold-start fallback.",
      "Designed 4 tool-using agents with guardrails that cap price changes at ±15% and escalate refunds above $10 to a human."
    ],
    tags: ["Python", "FastAPI", "SQLAlchemy", "LightGBM", "SHAP", "PyTorch", "Scikit-Learn", "LinUCB"],
    glowColor: "rgba(168, 85, 247, 0.15)",
    borderColor: "hover:border-accent-purple/30"
  },
  {
    id: 3,
    title: "GradeSense: Real-Time Recommendations for Paper Machines",
    url: "https://gradesense-8yynkas2wmtq9ckgek3uapp.streamlit.app/",
    displayUrl: "gradesense-8yynkas2wmtq9ckgek3uapp.streamlit.app",
    githubUrl: "https://github.com/anuj-k-bit/Gradesense",
    description: "A decision-support system that recommends paper-machine setpoints during grade changes, combining a physics model, LightGBM, and an MPC optimizer.",
    highlights: [
      "Built a 6-stage pipeline that serves setpoint recommendations in under 50 ms, with lag-aware handling of delayed and missing sensor data.",
      "Cut MAE by 50% vs a persistence baseline and 23% vs plain LightGBM with a hybrid physics + LightGBM predictor; 52% less off-spec paper in simulation.",
      "Built an operator dashboard with SHAP explanations and top-k retrieval of similar past grade changes.",
      "Designed a 4-table SQLite schema (recommendations, feedback, outcomes, operator logs) that traces every recommendation to the operator's response, with Pytest coverage."
    ],
    tags: ["Python", "LightGBM", "MPC", "SHAP", "SQLite", "Pytest"],
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "hover:border-accent-blue/30"
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
          AI agents, search, and machine learning systems I've built, with live demos and source code.
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
                      {project.date && (
                        <Badge variant="outline" className="text-neutral-400 border-white/5 flex items-center gap-1.5 py-1 px-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.date}
                        </Badge>
                      )}
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

                <CardFooter className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="glow"
                    className="w-full flex-1 flex items-center justify-center gap-2 group text-sm py-5"
                    onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                  >
                    <span>{project.linkLabel ?? "Visit Live Demo"}</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="w-full flex-1 flex items-center justify-center gap-2 text-sm py-5 border-white/10 hover:border-white/20 text-neutral-200"
                      onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                    >
                      <IconBrandGithub className="w-4 h-4" />
                      <span>View Code</span>
                    </Button>
                  )}
                </CardFooter>
              </GlowingCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
