const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-yellow-300 focus:outline-none ring-2 ring-primary hover:scale-110 transition-all duration-200"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  )
}

export default ThemeToggle