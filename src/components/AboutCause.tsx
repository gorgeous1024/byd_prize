import { Leaf, Factory, Globe, Zap } from 'lucide-react'

const AboutCause = () => {
  const impacts = [
    {
      icon: <Leaf className="w-6 h-6" />,
      text: 'Support cleaner cities'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: 'Sustainable future'
    },
    {
      icon: <Factory className="w-6 h-6" />,
      text: 'Innovation & technology'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'Green world initiative'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-byd-green/5 to-byd-blue/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              More Than Just a <span className="text-gradient">Raffle</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              By purchasing a ticket, you'll not only get a chance to win this amazing vehicle but also 
              directly contribute to <span className="font-semibold text-byd-blue">Innovation and Technology 
              Build in the BYD Industry</span>.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every ticket sold helps us at <span className="font-semibold text-byd-green">BYD Company Limited</span> continue 
              our mission to build a green world through innovation and technology, supporting cleaner 
              cities and a sustainable future for us all.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {impacts.map((impact, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-byd-green">
                    {impact.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{impact.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-byd-green/20 rounded-full blur-3xl"></div>
            <img 
              src="https:h/ttps:/.umsplash.csulphtt--1473341304170-971dccb5ac1e?w=800&q=801304170-971dccb5ac1e?w=800&q=80" 
              alt="Green Technology" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-byd-green mb-1">100%</div>
              <div className="text-sm text-gray-600">Electric Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCause

