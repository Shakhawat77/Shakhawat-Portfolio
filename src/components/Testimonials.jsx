const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jensen is a top-tier developer. The attention to detail in the UI was impressive and exactly what we needed for our launch.",
      name: "Michael Chen",
      position: "Product Manager, Nexus",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd-xtbRvCkezg00PRosVrOEOf6nVDYg9mpNZfAF4QvJN8UNwMGG9p8g_seqX-vKjDKnfW9rUpWr9_AS6JxONzbpNohWGjKrj5pRkLUseyH3-I9XeBgFGWWSUix3akx6bdyuiMQ5beE6EguB4rbwzfBwScy_gWoLc4T3N1VCFxPrQ-CGDsNXKwRzYEhwWzASbawfR2LiiLcKtTQZKEsY3mFY5c3oHVclp2eofBAVol31M1M3q0U4FvqOUjsQT7TiNrk5RQoGIt7zgxB"
    },
    {
      quote: "Delivered complex features on time. The code is clean, scalable, and easy for our team to maintain.",
      name: "Sarah Williams",
      position: "Founder, TechFlow",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4sWy0KU_tzH_mJLx-i5z1LkDTKNOwkbCsriMu-wmwiu1hmPRIvGX5YPUBPrIJqrDPBkEbqpfLMWodA7YXPo1KKbFJ1SCZkT0Lk-otjSAw8dD3g6oK5WN5eVEWKwkLy0pUFAPICIgfsRMXGXSdEH7aNn7nyFrSoOQXfjcjZsuh1iFm9YlsQ5dAADrF-ym7r6evoQFnfNr5wF1RXmwFADGuGiOtH8irH8c14xp8Nss-K0n_NJlu9gNxL7wsINnELDuUny7N5WvTUH2"
    },
    {
      quote: "Great communication throughout the project. Jensen brought creative solutions to every problem we faced.",
      name: "David Miller",
      position: "Tech Lead, Innovate Inc",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoRPK46xAP2brPjP1E7Qe-9pAeQuuw7QGAAuc8vrRq1ttxZEB1_L9VnkqDKnCuVrdoyR79uzTiFXhsqEdZ5ic8WkmRD_FT"
    }
  ]

  return (
    <section className="py-32 bg-gray-50 dark:bg-background-dark transition-colors duration-300 relative z-10" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">What Clients Say</h2>
          <div className="h-12 w-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] p-10 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <span className="material-symbols-outlined text-4xl text-primary/40 mb-4">format_quote</span>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 italic flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full"
                  src={testimonial.avatar}
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials