import { Trophy, DollarSign, Calendar, Clock } from 'lucide-react'

const KeyDetails = () => {
  const details = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Grand Prize',
      value: '2025 BYD SEAL U',
      description: 'Brand new electric vehicle',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Ticket Price',
      value: '$2,500',
      description: 'Per ticket entry',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Drawing Date',
      value: 'Dec 31, 2025',
      description: 'Live drawing event',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Sales End',
      value: 'Dec 31, 2025',
      description: 'Limited time offer',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section id="details" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            🛎️ Key Details
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our annual car raffle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                {detail.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{detail.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">{detail.value}</p>
              <p className="text-sm text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyDetails

