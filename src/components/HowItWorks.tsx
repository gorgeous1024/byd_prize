import { Ticket, Mail, Gift, PartyPopper } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <Ticket className="w-8 h-8" />,
      title: 'Purchase Your Ticket',
      description: 'Get your raffle ticket for $2,500 and enter the draw',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Receive Confirmation',
      description: 'Get your ticket confirmation via email immediately',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Wait for Drawing',
      description: 'Live drawing on December 31, 2025',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Win Your Prize',
      description: 'Drive away in your brand new BYD SEAL U!',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to win your dream electric vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

