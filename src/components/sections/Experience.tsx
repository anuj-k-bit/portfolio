import * as React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, ShieldCheck, CloudLightning, Briefcase, Calendar, ArrowUpRight } from "lucide-react"
import { GlowingCard } from "../ui/Card"

interface TimelineItem {
  id: number
  type: "education" | "certification" | "experience"
  title: string
  subtitle: string
  date?: string
  issuer?: string
  details?: string
  highlights?: string[]
  verificationUrl?: string
  verificationCode?: string
  icon: React.ComponentType<{ className?: string }>
  glowColor: string
}

const timelineData: TimelineItem[] = [
  {
    id: 10,
    type: "experience",
    title: "Software Engineering and Development Intern",
    subtitle: "Govt. of Madhya Pradesh and TCS joint venture that runs the state's citizen e-services portal.",
    date: "May 2026 – Jul 2026",
    issuer: "MPOnline Limited, Bhopal",
    highlights: [
      "Built 7 FastAPI microservices with 26 REST endpoints for orders, inventory, demand forecasting, and pricing.",
      "Lowered forecast MAE by 9.5% (2.41 to 2.18) through LightGBM feature engineering; served SHAP explanations and drift alerts.",
      "Designed 4 tool-using agents (supervisor, restock, pricing, ops) with guardrails that cap price changes at ±15% and escalate refunds above $10.",
    ],
    icon: Briefcase,
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: 11,
    type: "certification",
    title: "AWS Certified AI Practitioner",
    subtitle: "Foundational certification covering AI, machine learning, and generative AI concepts and services on AWS.",
    issuer: "Amazon Web Services",
    icon: Award,
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: 12,
    type: "certification",
    title: "Agentic AI Certified Foundations Associate",
    subtitle: "Oracle certification in the foundations of agentic AI.",
    issuer: "Oracle",
    icon: Award,
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 13,
    type: "certification",
    title: "Applied Machine Learning in Python",
    subtitle: "Course on applying machine learning with Python and Scikit-Learn.",
    issuer: "University of Michigan",
    icon: Award,
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: 1,
    type: "certification",
    title: "Google IT Support Certificate",
    subtitle: "Professional IT Support foundations, networking, operating systems, and security administration.",
    date: "Jan 16, 2026",
    issuer: "Google / Coursera",
    details: "Includes: The Bits and Bytes of Computer Networking course certificate.",
    verificationUrl: "https://coursera.org/verify/D384GGF9HRSL",
    icon: Award,
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: 2,
    type: "certification",
    title: "Google Cybersecurity Professional Certificate",
    subtitle: "Security analyst training, incident response, SIEM tools, packet analysis, and network defense.",
    date: "Dec 19, 2025",
    issuer: "Coursera / Google",
    verificationUrl: "https://www.credly.com/go/giIF458y",
    icon: ShieldCheck,
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: 3,
    type: "certification",
    title: "OCI 2025 Certified Observability Professional",
    subtitle: "Oracle Cloud Infrastructure observability, logging orchestration, application performance monitoring, and operations management.",
    date: "Oct 27, 2025",
    issuer: "Oracle University",
    verificationCode: "Credential ID: 102975963OCI25OMCP",
    verificationUrl: "https://education.oracle.com/learning-explorer",
    icon: CloudLightning,
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 4,
    type: "experience",
    title: "Deloitte Cyber Job Simulation",
    subtitle: "Completed simulated cybersecurity forensic analysis, vulnerability assessment, and risk remediation tasks.",
    date: "Jul 2, 2025",
    issuer: "Deloitte / Forage",
    details: "Enrolment Code: LZh9AhuThq44PEtaX | User Verification Code: yZdZg4po6S7hKe6bq",
    verificationUrl: "https://www.theforage.com/simulations/deloitte",
    icon: Briefcase,
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: 5,
    type: "certification",
    title: "IBM Cyber Security Analyst",
    subtitle: "Successfully completed and received a passing grade in Cyber Security Analyst (CECSA1IN, provided by IBMCE) course.",
    date: "Jun 23, 2025",
    issuer: "IBM Career Education / VIT",
    verificationUrl: "https://courses.vit.skillsnetwork.site/certificates/c1f5f17a2b2c47d292e650581dfb49c6",
    icon: ShieldCheck,
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: 6,
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Vellore Institute of Technology, Bhopal",
    date: "Sep 2023 – Expected May 2027",
    issuer: "CGPA: 8.33 / 10.0",
    details: "Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Computer Networks, Machine Learning, Deep Learning.",
    icon: GraduationCap,
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
]

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto select-none">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          EDUCATION & EXPERIENCE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mx-auto font-body text-base"
        >
          My internship at MPOnline, my degree at VIT Bhopal, and certifications in AI, cloud, and cybersecurity.
        </motion.p>
      </div>

      <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-12">
        {/* Neon Gradient Timeline Line */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-blue pointer-events-none" />

        {timelineData.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="relative">
              {/* Timeline Indicator Dot */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="absolute -left-[31px] md:-left-[47px] top-1.5 p-1.5 rounded-full bg-black border border-white/10 text-accent-cyan z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110 transition-transform duration-300"
              >
                <Icon className="w-4 h-4 md:w-5.5 h-5.5" />
              </motion.div>

              {/* Event Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlowingCard
                  glowColor={item.glowColor}
                  className="p-6 border-white/5 hover:border-accent-cyan/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span className="text-xs font-heading font-semibold text-accent-cyan tracking-wider uppercase bg-accent-cyan/5 border border-accent-cyan/15 rounded-md px-2.5 py-0.5 w-fit">
                      {item.type}
                    </span>
                    {item.date && (
                      <span className="text-xs font-heading text-neutral-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {item.issuer && (
                    <div className="text-sm font-heading font-semibold text-accent-purple tracking-wide mb-3">
                      {item.issuer}
                    </div>
                  )}

                  <p className="text-sm text-neutral-400 font-body leading-relaxed mb-3">
                    {item.subtitle}
                  </p>

                  {item.highlights && (
                    <ul className="space-y-2.5 mb-3">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="text-sm text-neutral-400 font-body flex items-start gap-2 leading-relaxed">
                          <span className="text-accent-purple font-bold mt-1 text-xs">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.details && (
                    <p className="text-xs text-neutral-500 font-body border-t border-white/5 pt-3 leading-relaxed">
                      {item.details}
                    </p>
                  )}

                  {item.verificationCode && (
                    <p className="text-xs text-neutral-500 font-heading border-t border-white/5 pt-3 leading-relaxed">
                      {item.verificationCode}
                    </p>
                  )}

                  {item.verificationUrl && (
                    <div className="mt-4 border-t border-white/5 pt-3">
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-accent-cyan hover:text-white transition-colors duration-300 group"
                      >
                        <span>Verify Credential</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </GlowingCard>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
