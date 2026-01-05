const Hero = () => {
  return (
    <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-32 pb-20 lg:pt-0 min-h-screen">
      <div className="absolute inset-0 bg-hero-gradient z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
              Hello
              <span className="text-primary text-6xl leading-none ml-1 mb-2">.</span>
            </h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300">I'm SHAKHAWAT</h3>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Software <br /> Developer
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
            <button className="px-8 py-3 border border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 font-semibold hover:border-primary hover:text-primary dark:hover:text-primary dark:hover:border-primary transition-all duration-200">
              My resume
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[600px]">
          {/* Floating Arrows */}
          <div className="absolute top-1/4 left-0 lg:-left-8 animate-float opacity-20 dark:opacity-40">
            <svg fill="none" height="60" stroke="#FF6F59" strokeWidth="1" viewBox="0 0 50 50" width="60">
              <path d="M40 10 L15 25 L40 40"></path>
              <path d="M30 10 L5 25 L30 40" opacity="0.5"></path>
            </svg>
          </div>
          
          <div className="absolute bottom-1/4 right-0 lg:-right-8 animate-float-delayed opacity-20 dark:opacity-40">
            <svg fill="none" height="60" stroke="#FF6F59" strokeWidth="1" viewBox="0 0 50 50" width="60">
              <path d="M10 10 L35 25 L10 40"></path>
              <path d="M20 10 L45 25 L20 40" opacity="0.5"></path>
            </svg>
          </div>

          {/* Circular Borders */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-primary/30 dark:border-primary/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border-4 border-primary/20 dark:border-primary/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          {/* Profile Image */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-2xl">
            <img
              alt="MD SHAKHAWAT"
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/s9F49kZK/Whats-App-Image-2026-01-05-at-7-08-19-PM.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero