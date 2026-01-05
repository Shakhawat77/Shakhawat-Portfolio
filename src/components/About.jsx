import React from 'react'

const About = () => {
  return (
    <section className="py-32 bg-white dark:bg-surface-dark transition-colors duration-300 relative z-10" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="h-12 w-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Passionate Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I am a software developer with a strong foundation in building responsive and accessible web applications. My journey in tech is driven by a curiosity to understand how things work and a desire to create meaningful digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              With expertise in the modern web stack, I enjoy solving complex problems and collaborating with cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-[#0D1117] p-10 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-400">Writing maintainable, scalable, and efficient code is my top priority for every project.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Responsive Design</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ensuring applications look and feel great on any device, from desktop to mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About