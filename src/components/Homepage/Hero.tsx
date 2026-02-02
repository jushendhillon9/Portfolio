import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2
      }))
      setStars(newStars)
    }
    generateStars()
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 3 + star.delay, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
            Software Engineer
          </h1>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jushen Dhillon
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build AI-powered products that solve real problems.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Creator of <span className="text-primary font-semibold">Traject</span> — an AI transfer-planning platform that translates
            ASSIST articulation data into dynamic semester plans using Next.js, Supabase, AWS Lambda, and OpenAI.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              View Traject
            </button>

            <a
              href="/Jushen_Dhillon_Resume.pdf"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero