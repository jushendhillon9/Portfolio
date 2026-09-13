import { motion } from 'motion/react'
import { ExternalLink, Download, Linkedin } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback.tsx'
import professionalPhoto from '/src/assets/ProfessionalPhoto.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m Jushen Dhillon — a student at USC studying Computer Science and Business Administration, expecting to
              graduate in August 2027. My focus is software engineering: backend systems, infrastructure, and AI-enabled
              applications. I prefer applying what I learn through real engineering work rather than keeping it limited to
              coursework.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I currently work as an <span className="font-semibold">AI / Software Engineering Consultant at BusinessWise</span>,
              where I’m building a company-intelligence pipeline for Atlanta-area businesses — multi-source data ingestion,
              entity resolution against a 399K+ record legacy database, async enrichment and job processing with bounded
              retries, exponential backoff, and crash recovery, plus provenance-aware validation and human-in-the-loop review
              workflows. It hasn’t been fully production-deployed yet, but it’s the core of my day-to-day engineering work.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m also <span className="font-semibold">Co-Founder / Founding Engineer of Traject</span>, an AI-powered
              transfer-planning platform, where I work across backend and data logic, AI-assisted advising and retrieval, and
              course-planning workflows using Next.js/TypeScript, PostgreSQL/Supabase, and AWS Lambda.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Previously, I interned at <span className="font-semibold">Akala</span> doing frontend engineering, and worked on
              healthcare software at <span className="font-semibold">Acumen Velocity</span> building a FHIR converter. My
              coursework spans data structures, algorithms, software engineering, and applied AI, including{' '}
              <span className="font-semibold">TAC 459</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="https://www.linkedin.com/in/jushendhillon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                LinkedIn
                <ExternalLink size={16} />
              </motion.a>

              <motion.a
                href="/Jushen_Dhillon_Resume.pdf"
                download="Jushen_Dhillon_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
              <ImageWithFallback
                src={professionalPhoto}
                alt="Jushen Dhillon Professional Photo"
                className="relative w-80 h-110 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
