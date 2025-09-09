import { motion } from 'motion/react'
import { ExternalLink, Download, Linkedin } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
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
              Hey, I'm Jushen Dhillon, an aspiring software engineer on the hunt for an internship. My coding journey began during the 2020 pandemic with Python lessons from my cousin Devin, who is a software engineer, over Zoom. 
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My love for programming grew over the years, and its what lead me to enroll in the UCI full-stack coding bootcamp and pursue an internship at Acumen Velocity. One project of mine that stands out is my most recent—it introduced me to Spring Boot and expanded my coding repertoire.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              In my downtime, I brainstorm potential projects, considering their audience and impact. You're invited to explore and learn about my interests through my portfolio.
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
                href="#"
                download="JushenDhillon_CV.pdf"
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
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About