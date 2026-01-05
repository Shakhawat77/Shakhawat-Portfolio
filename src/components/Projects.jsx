import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Battleship',
      technologies: ['HTML', 'CSS', 'Javascript', 'Node.js'],
      description: 'Used DOM manipulation to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed.',
      codePreview: (
        <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 font-mono text-xs sm:text-sm text-gray-300 shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          <div className="flex gap-2 mb-4 opacity-50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-1 font-medium">
            <p className="text-gray-500 mb-2">// Terminal Output</p>
            <p><span className="text-primary">Hit!</span></p>
            <p className="text-gray-400">Enter a location to strike i.e., 'A2' from A-J and 0-9</p>
            <p className="text-green-400">&gt; F2</p>
            <p><span className="text-primary">Miss!</span></p>
            <p className="text-gray-400">Enter a location to strike i.e., 'A2' from A-J and 0-9</p>
            <p className="text-green-400">&gt; E3</p>
            <p><span className="text-primary">Hit!</span></p>
            <p className="text-white">You sunk a Cruiser. There are 4 ships left!</p>
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      title: 'Movie Titles API',
      technologies: ['HTML', 'API', 'Version Control'],
      description: 'Uses a public movie API to build a collection movie list that sorts from A to Z. Counts movies in each container and allows users to manage their favorites.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpKdp3mWc6EC5Kb8uIuIM-wSWRtouv38Hhh86QdRW-R20EkW3msy8tDGd0xKzE1WtX9fpPIVBeFzucxVSvkoVeY97OPXtfatlq27coQpm3wAP0Gs6ZiJE5ngIHyQgJdj3TCWiZVhsoqd_DTB5M_IgjgvQC1MPXtXc86xncC5gGJ_g1-PiQb2s-Mj2XZFabFgZNZTxcTHZ2kWMk6z-JnzSCgjHI6DA_x8VZ2Q1PoQoTjiIhjIO_lwWbKeouuIk3cEa6Fsm9RujZ9_-2',
      imageLeft: true
    },
    {
      title: 'Javascript Calculator',
      technologies: ['HTML', 'Javascript'],
      description: 'Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal. Handles various operators and edge cases efficiently.',
      codePreview: (
        <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 font-mono text-xs sm:text-sm text-gray-300 shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex gap-2 mb-4 opacity-50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2">
            <p className="text-purple-400">const <span className="text-blue-400">calculate</span> = <span className="text-yellow-300">(a, b, op)</span> =&gt; {`{`}</p>
            <p className="pl-4 text-gray-400">let result = 0;</p>
            <p className="pl-4"><span className="text-primary">if</span> (op === '+') result = a + b;</p>
            <p className="pl-4"><span className="text-primary">else if</span> (op === '-') result = a - b;</p>
            <p className="pl-4"><span className="text-primary">return</span> result;</p>
            <p>{`}`}</p>
            <p className="text-gray-500 mt-4">// Input: 5 + 3</p>
            <p className="text-green-400">&gt; 8</p>
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      title: 'SaaS Landing Page',
      technologies: ['HTML', 'CSS', 'Design'],
      description: 'Created a responsive landing page using Grid and Flexbox. Features a modern design, newsletter signup, and pricing tables.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPLlgtzgACbch-Fbzj3Wnif0PMTCB0B65UeD5S4oJsu-3i41ztu-RB-lf0E-fJk_98qTbTVNw1V8rSW3UZCEinMkmxrFyYsUjNIIaTHJnsdpGXjnhr1IgMhOPSGUXyzTmOxl34qDOZLH8GSPZdJ9leLdN5EfdgmsP6QMTeepR5JdE18xsOBtvrTmzq4VmeEEijcjHc7B8j1MpVA6-gPVXWyyY0Ipi5zWjfjd8w9zyz6lTxw-j6yJcGcmRPbTcfY_X9F3ZifUQkg3zk',
      imageLeft: true
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-surface-dark transition-colors duration-300 relative z-10" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
          <div className="h-12 w-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                project.imageLeft ? '' : 'lg:grid-flow-col-dense'
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${project.imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide bg-gray-200 dark:bg-background-dark text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6 pt-2">
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded shadow-lg hover:bg-primary-hover transition-colors">
                    View Github
                  </button>
                  <a className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors group" href="#">
                    View project
                    <span className="text-lg">↗</span>
                  </a>
                </div>
              </div>

              {/* Image/Code Preview */}
              <div className={`${project.imageLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
                {project.codePreview ? (
                  project.codePreview
                ) : (
                  <div className="relative group">
                    {project.imageLeft && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    )}
                    <div className="relative bg-surface-dark border border-gray-800 rounded-lg overflow-hidden h-[360px] flex items-center justify-center">
                      <img
                        alt={project.title}
                        className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                        src={project.image}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects