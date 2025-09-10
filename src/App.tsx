import Navigation from './components/Homepage/Navigation.tsx'
import Hero from './components/Homepage/Hero.tsx'
import About from './components/Homepage/About.tsx'
import Projects from './components/Homepage/Projects.tsx'
import Skills from './components/Homepage/Skills.tsx'
import Contact from './components/Homepage/Contact.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Jushen Dhillon. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed and developed with ❤️ for showcasing my coding journey.
          </p>
        </div>
      </footer>
      
      <Toaster />
    </div>
  )
}