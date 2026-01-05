const Footer = () => {
  const navItems = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="text-center md:text-left space-y-3">
            <div className="text-2xl font-bold tracking-wide dark:text-white text-gray-900 flex items-center justify-center md:justify-start gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">JO</div>
              Jensen Omega
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Crafting robust and scalable digital solutions with a focus on user experience and clean code.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 my-10"></div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2024 Jensen Omega. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a
              aria-label="GitHub"
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
              href="#"
            >
              <i className="devicon-github-original text-xl"></i>
            </a>
            <a
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
              href="#"
            >
              <i className="devicon-linkedin-plain text-xl"></i>
            </a>
            <a
              aria-label="Twitter"
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
              href="#"
            >
              <i className="devicon-twitter-original text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer