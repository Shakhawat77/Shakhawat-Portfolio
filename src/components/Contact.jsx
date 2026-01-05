import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <section className="py-32 bg-white dark:bg-surface-dark transition-colors duration-300 relative z-10" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
          <div className="h-12 w-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's work together</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm currently available for freelance work or full-time positions. 
                If you have a project that needs some creative touch, let's chat.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors" href="mailto:hello@jensenomega.dev">
                    hello@jensenomega.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <a className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors" href="tel:+11234567890">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-xl font-medium text-gray-900 dark:text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">Follow me</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary group transition-all duration-300 shadow-sm hover:shadow-md" href="#">
                  <i className="devicon-linkedin-plain text-2xl group-hover:text-primary transition-colors"></i>
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
                <a className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary group transition-all duration-300 shadow-sm hover:shadow-md" href="#">
                  <i className="devicon-github-original text-2xl group-hover:text-primary transition-colors"></i>
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">GitHub</span>
                </a>
                <a className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary group transition-all duration-300 shadow-sm hover:shadow-md" href="#">
                  <i className="devicon-twitter-original text-2xl group-hover:text-primary transition-colors"></i>
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-[#0D1117] p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="name">Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="subject">Subject</label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  id="subject"
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button
                className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact