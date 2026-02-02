import { motion } from 'motion/react'
import { Badge } from '../ui/badge.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Router"
      ],
      color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
    },
    {
      title: "Backend & Data Systems",
      skills: [
        "Node.js",
        "Express",
        "Supabase",
        "SQL",
        "MongoDB",
        "GraphQL",
        "REST APIs"
      ],
      color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
    },
    {
      title: "AI, Cloud & Infrastructure",
      skills: [
        "OpenAI API",
        "Embeddings",
        "RAG Pipelines",
        "ChromaDB",
        "AWS Lambda",
        "AWS Fargate",
        "Docker",
        "Vercel",
        "Git"
      ],
      color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Technologies I Build With</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className={`h-full ${category.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="grid grid-cols-2 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex justify-center"
                      >
                        <Badge
                          variant="secondary"
                          className="w-full text-center py-2 px-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
