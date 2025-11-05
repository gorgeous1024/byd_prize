import { Star, Quote } from 'lucide-react'

const Winners = () => {
  const winners = [
    {
      name: 'Sarah Johnson',
      year: '2024 Winner',
      prize: 'BYD ATTO 3',
      image: '/images/winners/sarah-johnson.jpg',
      quote: 'I never thought I would win! This electric car has changed my life and my daily commute. Thank you BYD!',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Michael Chen',
      year: '2023 Winner',
      prize: 'BYD HAN',
      image: '/images/winners/michael-chen.jpg',
      quote: 'Winning this raffle was a dream come true. The BYD HAN is incredible, and I\'m proud to drive electric!',
      location: 'San Francisco, CA'
    },
    {
      name: 'Emily Rodriguez',
      year: '2023 Winner',
      prize: 'BYD DOLPHIN',
      image: '/images/winners/emily-rodriguez.jpg',
      quote: 'Not only did I win an amazing car, but I\'m also contributing to a cleaner environment. Win-win!',
      location: 'Miami, FL'
    },
    {
      name: 'David Kim',
      year: '2022 Winner',
      prize: 'BYD TANG',
      image: '/images/winners/david-kim.jpg',
      quote: 'The best investment I ever made was that raffle ticket. My family loves our new electric SUV!',
      location: 'Seattle, WA'
    },
    {
      name: 'Lisa Martinez',
      year: '2022 Winner',
      prize: 'BYD SEAL',
      image: '/images/winners/lisa-martinez.jpg',
      quote: 'I\'m so grateful for this opportunity. The BYD SEAL is stylish, efficient, and perfect for my lifestyle.',
      location: 'Austin, TX'
    },
    {
      name: 'James Wilson',
      year: '2021 Winner',
      prize: 'BYD e6',
      image: '/images/winners/james-wilson.jpg',
      quote: 'Winning this raffle changed everything. I love driving electric and supporting sustainable technology!',
      location: 'Denver, CO'
    }
  ]

  return (
    <section id="winners" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Happy Winners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people who won and are now driving the future of electric mobility
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div 
              key={index}
              className="card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{winner.name}</h3>
                  <p className="text-sm opacity-90">{winner.location}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-byd-blue">{winner.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-byd-green">{winner.prize}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote size={20} className="absolute -top-2 -left-2 text-byd-blue/20" />
                  <p className="text-gray-600 italic pl-4">{winner.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-byd-blue to-byd-green p-1 rounded-2xl">
            <div className="bg-white rounded-2xl px-8 py-6">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Join <span className="text-gradient">500+ Winners</span>
              </p>
              <p className="text-gray-600">
                Since 2019, we've given away over $15 million in electric vehicles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Winners

