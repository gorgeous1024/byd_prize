import { TrendingUp, DollarSign, Award, Crown, Gem } from 'lucide-react'

const InvestmentPlans = () => {
  const investmentPlans = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Starter',
      range: '$2,500 - $19,999',
      returns: '80% - 140%',
      description: 'Annually',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Advanced',
      range: '$20,000 - $49,999',
      returns: '90% - 150%',
      description: 'Annually',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Pro Plan',
      range: '$50,000 - $99,999',
      returns: '100% - 160%',
      description: 'Annually',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Elite',
      range: '$100,000 - $200,000',
      returns: '120% - 180%',
      description: 'Annually',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Dignitary',
      range: '$201,000 - Unlimited',
      returns: '150% - 200%',
      description: 'Annually',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  return (
    <section id="details" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            🏦 Investment Plans & Potential Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projected annual profits are based on performance forecast and BYD's expanding clean energy initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {investmentPlans.map((plan, index) => (
            <div 
              key={index}
              className="card p-6 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
              <p className="text-sm font-semibold text-gray-600 mb-2">Investment Range</p>
              <p className="text-lg font-bold text-gray-900 mb-3">{plan.range}</p>
              <p className="text-sm font-semibold text-gray-600 mb-2">Estimated Annual Profit</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                {plan.returns}
              </p>
              <p className="text-xs text-gray-500">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestmentPlans

