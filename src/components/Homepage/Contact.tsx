import { motion } from 'motion/react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { ExternalLink, Mail, Phone, Send } from 'lucide-react'
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    // Simulate form submission
    toast.success('Thanks for reaching out! I\'ll get back to you soon.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contact & Blog</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dev.to Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Check Out My Blog</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <motion.a
                  href="https://dev.to/jushendhillon9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-32 h-32 mx-auto mb-6 p-4 bg-black rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                    <span className="text-white font-bold text-2xl">DEV</span>
                  </div>
                </motion.a>
                <p className="text-muted-foreground mb-6">
                  Follow my coding journey, tutorials, and insights on dev.to. 
                  I share my experiences learning new technologies and building projects.
                </p>
                <Button 
                  asChild
                  className="w-full"
                >
                  <a 
                    href="https://dev.to/jushendhillon9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Visit My Blog
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
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
                      placeholder="your.email@example.com"
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
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    size="lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Contact Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={18} />
                      <span>jushen.dhillon@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={18} />
                      <span>(949) 531-8565</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact