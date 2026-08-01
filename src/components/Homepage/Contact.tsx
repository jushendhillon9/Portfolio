import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx'
import { Input } from '../ui/input.tsx'
import { Textarea } from '../ui/textarea.tsx'
import { Button } from '../ui/button.tsx'
import { Label } from '../ui/label.tsx'
import { ExternalLink, Mail, Phone, Send, Copy, Linkedin } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const email = 'jushen.dhillon@gmail.com'
  const phone = '(949) 531-8565'
  const linkedinUrl = 'https://www.linkedin.com/in/jushendhillon/'
  const blogUrl = 'https://dev.to/jushendhillon9'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // honeypot field (bots will fill this, humans won't)
    company: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      toast.success('Email copied to clipboard')
    } catch {
      toast.error('Could not copy email')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      setSubmitting(true)

      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Map to backend keys: fullname, sender, message (+ honeypot)
        body: JSON.stringify({
          fullname: formData.name,
          sender: formData.email,
          message: formData.message,
          honeypot: formData.company,
        })
      })

      const data = await resp.json().catch(() => ({}))
      if (!resp.ok) throw new Error(data?.error || 'Failed to send')

      toast.success("Thanks — I’ll get back to you soon.")
      setFormData({ name: '', email: '', message: '', company: '' })
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I’m actively seeking Software Engineering internships for Summer 2026 — especially roles in AI applications,
            backend systems, and developer infrastructure.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Links / Availability */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">Let’s connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The fastest way to reach me is email or LinkedIn. If you’re hiring for Summer 2026, I’d love to chat.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-border p-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={18} />
                      <span className="font-medium text-foreground">{email}</span>
                    </div>
                    <Button variant="secondary" onClick={copyEmail} className="gap-2">
                      <Copy size={16} />
                      Copy
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground rounded-lg border border-border p-4">
                    <Phone size={18} />
                    <span className="font-medium text-foreground">{phone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="w-full">
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-2">
                      Email me
                      <ExternalLink size={16} />
                    </a>
                  </Button>

                  <Button asChild variant="secondary" className="w-full">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <Linkedin size={16} />
                      LinkedIn
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>

                {/* Blog (secondary) */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Occasional writing:
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Read my dev.to posts
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Recruiting, internships, collaborations — what’s up?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                    <Send size={20} className="mr-2" />
                    {submitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
