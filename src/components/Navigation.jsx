import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#', label: 'Home', active: true },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contacts' }
  ]

  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center z-50 absolute top-0 left-0 bg-transparent">
      <div className="text-2xl font-bold tracking-wide dark:text-white text-gray-900">
        Jensen Omega
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`transition-colors ${
              item.active
                ? 'text-primary hover:text-primary-hover'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-background-dark shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`transition-colors ${
                  item.active
                    ? 'text-primary hover:text-primary-hover'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation