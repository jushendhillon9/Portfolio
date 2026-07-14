import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx'
import { Badge } from '../ui/badge.tsx'

const Education = () => {
  const coursework = [
    { code: 'TAC 116', name: '' },
    { code: 'TAC 216', name: '' },
    { code: 'CSCI 360', name: 'Introduction to Artificial Intelligence' },
    { code: 'TAC 359', name: '' },
    { code: 'TAC 449', name: 'Applications of Machine Learning (planned)' },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary" aria-hidden="true">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    B.S. in Computer Science and Business Administration
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">University of Southern California</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Positioned to receive USC’s Artificial Intelligence Applications Specialization certificate upon graduation,
                pending formal approval of CSCI 360 as a TAC 259 substitution.
              </p>

              <div>
                <h3 className="font-semibold mb-3">Relevant AI Coursework</h3>
                <ul className="flex flex-wrap gap-3">
                  {coursework.map((course) => (
                    <li key={course.code}>
                      <Badge variant="secondary" className="py-2 px-3 text-sm">
                        <span className="font-semibold">{course.code}</span>
                        {course.name && <span className="text-muted-foreground">— {course.name}</span>}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
