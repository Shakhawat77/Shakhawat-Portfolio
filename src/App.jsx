import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved user preference or system preference
    const savedTheme = localStorage.getItem('color-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App