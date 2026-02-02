import { motion } from "motion/react"
import { ExternalLink, Github, Download } from "lucide-react"
import { Card, CardContent } from "../ui/card.tsx"
import { Badge } from "../ui/badge.tsx"
import { ImageWithFallback } from "../figma/ImageWithFallback.tsx"
import FhirConverterIMG from "/src/assets/FhirConverter.png"
import MyTraject from "/src/assets/MyTraject.png"
import Akala from "/src/assets/Akala.png"
import Certificate from "/src/assets/SummerSmasherCertificate-JushenDhillon.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Traject (Live)",
      description:
        "AI-powered transfer planning platform that translates ASSIST articulation data into dynamic semester plans for community college students.",
      tech:
        "Built end-to-end with Next.js + TypeScript, Supabase, AWS Lambda, ChromaDB, and OpenAI embeddings (RAG pipeline).",
      image: MyTraject,
      liveUrl: "https://www.mytraject.com",
      githubUrl: "",
      technologies: ["Next.js", "TypeScript", "Supabase", "AWS Lambda", "ChromaDB", "OpenAI", "RAG"],
      note:
        "Core engineering highlights: custom data parsing + normalization, serverless APIs, persistent storage/auth, and retrieval-augmented generation for real-time advising. Repository is private; happy to walk through architecture and code samples in an interview.",
    },
    {
      id: 2,
      title: "Akala",
      description:
        "Selected for USC Viterbi Summer Smasher to help modernize Akala’s front-end. Built responsive UI components (sidebar, videos, profile) using React, TypeScript, TanStack Router, Tailwind, and shadcn/ui.",
      tech: "Frontend modernization with React + TypeScript, TanStack Router, TailwindCSS, shadcn/ui, and Bun.",
      image: Akala,
      liveUrl: "",
      githubUrl: "",
      technologies: ["React", "TypeScript", "TanStack Router", "Tailwind", "shadcn/ui", "Bun"],
      note: "Private organization repository; certificate available upon request.",
      certificateUrl: Certificate,
    },
    {
      id: 3,
      title: "FhirConverter App",
      description:
        "Full-stack FHIR converter that uploads and converts files containing multiple FHIR resources into a Google Cloud FHIR dataset, with advanced search functionality.",
      tech: "Spring Boot (Java) backend + React frontend, integrated with Google Cloud Healthcare API and OAuth.",
      image: FhirConverterIMG,
      liveUrl: "https://fhirconverterappfrontend.vercel.app",
      githubUrl: "https://github.com/jushendhillon9/FhirConverterApp",
      technologies: ["Spring Boot", "Java", "React", "Google Cloud", "FHIR", "OAuth"],
    },
    {
      id: 4,
      title: "Just You",
      description:
        "YouTube companion for searching, saving, and annotating videos—built for students and creators who want a personalized, organized experience.",
      tech: "MongoDB + Express/Node backend with GraphQL API, React frontend, and JWT authentication.",
      image:
        "https://images.unsplash.com/photo-1649180543887-158357417159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NTcwMTY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveUrl: "https://justyou-5edecd479636.herokuapp.com/",
      githubUrl: "https://github.com/jushendhillon9/Just-You",
      technologies: ["MongoDB", "GraphQL", "Express", "Node.js", "React", "JWT"],
    },
    {
      id: 5,
      title: "The Crypto-Zone",
      description:
        "Front-end crypto dashboard for real-time price tracking, stats, and news using third-party APIs.",
      tech: "HTML/CSS + JavaScript (jQuery), Chart.js, and multiple APIs.",
      image:
        "https://images.unsplash.com/photo-1644925295849-f057b6ee1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2OTk4ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveUrl: "https://jushendhillon9.github.io/Crypto-Zone/",
      githubUrl: "https://github.com/jushendhillon9/Crypto-Zone",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Chart.js", "APIs"],
      note: "CoinGecko API rate limits may cause temporary missing data—reload after a few minutes if needed.",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work focused on full-stack systems, AI tooling, and data-driven products.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {project.note && (
                    <p className="text-sm text-orange-600 dark:text-orange-400 mb-4 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      {project.note}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-4">{project.tech}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        {project.title.includes("Traject") ? "View Traject" : "Live App"}
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}

                    {project.certificateUrl && (
                      <motion.a
                        href={project.certificateUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download size={16} />
                        Certificate
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
