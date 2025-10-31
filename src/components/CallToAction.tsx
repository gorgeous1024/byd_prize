import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

const CallToAction = () => {
  const benefits = [
    'Instant email confirmation',
    'Secure payment processing',
    'Multiple payment options',
    'Support a green future'
  ]

  const handleEmailClick = () => {
    window.location.href = 'mailto:automotivecompanybyd@gmail.com?subject=Raffle Ticket Purchase Inquiry'
  }

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-byd-blue via-byd-blue/90 to-byd-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Win Your Dream Car?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the movement towards a cleaner planet and maybe drive home in the future of electric mobility!
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3"
              >
                <CheckCircle size={20} className="text-green-300 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-xl mx-auto">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-byd-blue to-byd-green text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Tickets Now!
              </h3>
              <p className="text-gray-600">
                Email us to purchase your raffle ticket and secure your chance to win
              </p>
            </div>

            <button 
              onClick={handleEmailClick}
              className="w-full bg-gradient-to-r from-byd-blue to-byd-green text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail size={24} />
              <span>Email Us to Purchase</span>
              <ArrowRight size={20} />
            </button>

            <div className="mt-6 text-center">
              <a 
                href="mailto:automotivecompanybyd@gmail.com"
                className="text-byd-blue hover:text-byd-green font-semibold transition-colors"
              >
                automotivecompanybyd@gmail.com
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span>💳 Secure Payment</span>
                <span>•</span>
                <span>🔒 SSL Encrypted</span>
                <span>•</span>
                <span>✅ Verified</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-white/80 text-sm">
            <p>Sales ongoing until December 31, 2025 | Drawing held December 31, 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

