import * as React from "react"
import { motion } from "framer-motion"
import { GlowingCard, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/Card"
import { Label } from "../ui/Label"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Button } from "../ui/Button"
import { Mail, Phone, MapPin, Send, Check, FileText } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSuccess(false), 4000)
    }, 1500)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto select-none">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          CONTACT ME
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mx-auto font-body text-base"
        >
          Let's connect! Reach out for collaborative projects, Honeywell internship queries, or simply to say hello.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex flex-col justify-between gap-8"
        >
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              GET IN TOUCH
            </h3>
            <p className="text-neutral-400 font-body text-sm leading-relaxed mb-6">
              I am actively looking for internship roles where I can apply my problem-solving skills, full-stack capability, and cybersecurity certifications. Let's discuss how I can add value to your initiatives.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:anujkekre04@gmail.com"
                className="flex items-center gap-4 group p-3.5 rounded-lg border border-white/5 bg-neutral-950/40 hover:border-accent-cyan/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-md bg-neutral-900 border border-white/5 text-accent-cyan group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-heading font-semibold text-neutral-500 uppercase tracking-widest">
                    Email
                  </div>
                  <div className="text-sm font-heading font-semibold text-neutral-200 group-hover:text-accent-cyan transition-colors duration-300">
                    anujkekre04@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+916266209160"
                className="flex items-center gap-4 group p-3.5 rounded-lg border border-white/5 bg-neutral-950/40 hover:border-accent-purple/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-md bg-neutral-900 border border-white/5 text-accent-purple group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-heading font-semibold text-neutral-500 uppercase tracking-widest">
                    Phone
                  </div>
                  <div className="text-sm font-heading font-semibold text-neutral-200 group-hover:text-accent-purple transition-colors duration-300">
                    +91 6266209160
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-lg border border-white/5 bg-neutral-950/40">
                <div className="p-2.5 rounded-md bg-neutral-900 border border-white/5 text-accent-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-heading font-semibold text-neutral-500 uppercase tracking-widest">
                    Location
                  </div>
                  <div className="text-sm font-heading font-semibold text-neutral-200">
                    Bhopal, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons container */}
          <div>
            <h4 className="text-[11px] font-heading font-semibold text-neutral-500 uppercase tracking-widest mb-3">
              Social Channels
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/anuj-k-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-white/5 bg-neutral-950/40 text-neutral-400 hover:text-accent-cyan hover:border-accent-cyan/20 transition-all duration-300"
                title="GitHub"
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/anuj-kekre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-white/5 bg-neutral-950/40 text-neutral-400 hover:text-accent-purple hover:border-accent-purple/20 transition-all duration-300"
                title="LinkedIn"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a
                href="/Anuj_Kekre_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-white/5 bg-neutral-950/40 text-neutral-400 hover:text-accent-blue hover:border-accent-blue/20 transition-all duration-300"
                title="Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <GlowingCard
            glowColor="rgba(168, 85, 247, 0.12)"
            borderColor="border-white/5 hover:border-accent-purple/30"
            className="h-full"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-heading">SEND A MESSAGE</CardTitle>
              <CardDescription className="text-xs">
                Feel free to drop a line, and I will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  variant="glowPurple"
                  className="w-full flex items-center justify-center gap-2 py-5 font-semibold text-sm transition-all duration-300"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  )
}
