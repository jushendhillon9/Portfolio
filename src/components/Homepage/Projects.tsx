import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import FhirConverterIMG from "../../../public/assets/FhirConverter.png"
import MyTraject from "../../../public/assets/MyTraject.png"

const Projects = () => {
  const projects = [
	{
      id: 1,
      title: "MyTraject",
      description: "Traject is an ed-tech platform I’ve been building that helps community college students explore transfer pathways, articulation agreements, and career outcomes in one place. It combines scraped and processed course catalogs with external data sources like Lightcast, Adzuna, and BLS to give students insights into majors, GE requirements, and job prospects.",
      tech: "Backend built using AWS (ECS/Fargate, Backblaze B2, Supabase) while the frontend is a Next.js app with a clean, Figma-inspired UI.",
      image: FhirConverterIMG,
      liveUrl: "https://mytraject.com",
      githubUrl: "https://github.com/jushendhillon9/FhirConverterApp",
      technologies: ["Python", "React", "Supabase", "Node", "Java"]
    },
    {
      id: 2,
      title: "FhirConverter App",
      description: "A full-stack FHIR Converter application enabling users to upload and convert files containing multiple FHIR resources to a Google Cloud FHIR dataset. Handles file uploads to and from the Google Cloud Healthcare API for resource management. Includes advanced FHIR search functionalities.",
      tech: "Built using a Spring Boot Java Back-End and React Front-End",
      image: MyTraject,
      liveUrl: "https://fhirconverterappfrontend-9462c26a5dc8.herokuapp.com/login",
      githubUrl: "https://fhirconverterappfrontend.vercel.app",
      technologies: ["Spring Boot", "React", "Java", "Google Cloud", "FHIR"]
    },
    {
      id: 3,
      title: "Just You",
      description: "Meet Just-You: your YouTube companion. Search, save, and annotate videos seamlessly. Tailored for students and creators, it's your one-stop shop for an organized and personalized video experience.",
      tech: "Built using a MongoDB backend, a GraphQL API, and an Express.js/Node.js server, complemented by a React frontend. User authentication is implemented using JWT.",
      image: "https://images.unsplash.com/photo-1649180543887-158357417159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NTcwMTY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveUrl: "https://justyou-5edecd479636.herokuapp.com/",
      githubUrl: "https://github.com/jushendhillon9/Just-You",
      technologies: ["MongoDB", "GraphQL", "Express.js", "React", "JWT"]
    },
    {
      id: 4,
      title: "The Crypto-Zone",
      description: "A front-end application to keep tabs on your favorite, promising cryptos by offering real-time crypto tracking, advanced statistics, and insightful news.",
      tech: "Built using HTML, CSS featuring frameworks, JavaScript with JQuery, Chart.js, and several third-party APIs",
      image: "https://images.unsplash.com/photo-1644925295849-f057b6ee1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2OTk4ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveUrl: "https://jushendhillon9.github.io/Crypto-Zone/",
      githubUrl: "https://github.com/jushendhillon9/Crypto-Zone",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Chart.js", "APIs"],
      note: "Note: We have limited CoinGecko API queries per minute; if the app loses crypto data during its use, please wait 5 minutes and then reload the application before continuing."
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Projects & Challenges</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.note && (
                    <p className="text-sm text-orange-600 dark:text-orange-400 mb-4 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      {project.note}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.tech}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live App
                    </motion.a>
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