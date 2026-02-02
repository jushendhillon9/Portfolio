import { motion } from 'motion/react'
import { ExternalLink, Download, Linkedin } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback.tsx'
import professionalPhoto from '/src/assets/ProfessionalPhoto.jpg'
import resume from '/src/assets/Resume-JushenDhillon.pdf'

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
              I’m Jushen Dhillon — a USC student studying Computer Science and Business Administration, and a full-stack engineer
              focused on building real products that ship.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Most recently, I built <span className="font-semibold">Traject</span>, an AI-powered transfer planning platform that
              translates complex ASSIST articulation data into dynamic semester plans for community college students. I
              architected and deployed the end-to-end system using Next.js, TypeScript, Supabase, AWS Lambda, ChromaDB, and
              OpenAI embeddings (RAG pipelines).
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Previously, I worked on front-end modernization at <span className="font-semibold">Akala</span> through USC Viterbi’s
              Summer Smasher program and built a full-stack healthcare tool at <span className="font-semibold">Acumen Velocity</span>{' '}
              (Spring Boot + React) integrated with Google Cloud APIs.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m currently seeking <span className="font-semibold">Software Engineering internships for Summer 2026</span> —
              especially roles working on backend systems, AI applications, and developer-focused infrastructure.
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
                href={resume}
                download="JushenDhillon_Resume.pdf"
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
