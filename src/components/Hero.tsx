import { Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-byd-green/10 text-byd-green px-4 py-2 rounded-full mb-6">
              <Sparkles size={20} />
              <span className="font-semibold">Annual Car Raffle 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Behind the Wheel!{' '}
              <span className="text-gradient">Win a New Car</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Imagine cruising away in a brand new <span className="font-semibold text-byd-blue">2025 BYD SEAL U</span>! 
              This could be you — driving the future of electric mobility while supporting a cleaner planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('cta')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Get Your Tickets Now</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('details')}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div>
                <div className="text-3xl font-bold text-byd-blue">$2,500</div>
                <div className="text-sm text-gray-600">Per Ticket</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-byd-green">Dec 31</div>
                <div className="text-sm text-gray-600">Drawing Date</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-byd-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-byd-green/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/cars/byd-seal-u.jpg" 
                alt="2025 BYD SEAL U" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">2025 BYD SEAL U</h3>
                <p className="text-white/90">The Future of Electric Mobility</p>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl animate-float">
              <p className="text-sm font-semibold text-gray-700">🌱 100% Electric • Zero Emissions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

