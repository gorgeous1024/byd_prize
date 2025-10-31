import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About BYD', href: '#' },
      { name: 'Our Mission', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Innovation', href: '#' }
    ],
    raffle: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Raffle Details', href: '#details' },
      { name: 'Past Winners', href: '#winners' },
      { name: 'Get Tickets', href: '#cta' }
    ],
    legal: [
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Raffle Rules', href: '#' },
      { name: 'Contact Us', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-byd-blue to-byd-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">BYD RAFFLE</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building a green world through innovation and technology. Join us in supporting cleaner cities 
              and a sustainable future while getting a chance to win amazing electric vehicles.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={18} />
              <a 
                href="mailto:automotivecompanybyd@gmail.com"
                className="hover:text-byd-green transition-colors"
              >
                automotivecompanybyd@gmail.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-byd-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Raffle Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Raffle</h3>
            <ul className="space-y-2">
              {footerLinks.raffle.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-byd-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-byd-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BYD Company Limited. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-byd-green hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
              This raffle is conducted in accordance with all applicable laws and regulations. 
              Void where prohibited. Must be 18 years or older to participate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

