const Skills = () => {
  const skillCategories = [
    {
      icon: 'code',
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      icon: 'architecture',
      title: 'Frameworks',
      skills: ['React', 'Angular', 'Node.js', 'Vue.js']
    },
    {
      icon: 'database',
      title: 'Databases',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      icon: 'terminal',
      title: 'Tools',
      skills: ['Git', 'Docker', 'VS Code', 'AWS']
    }
  ]

  return (
    <section className="py-32 bg-gray-50 dark:bg-background-dark transition-colors duration-300 relative z-10" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technology</h2>
          <div className="h-12 w-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] p-8 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium bg-gray-50 dark:bg-background-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills