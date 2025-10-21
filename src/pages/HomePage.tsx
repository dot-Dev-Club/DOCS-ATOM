import { Link } from 'react-router-dom'
import { BookOpen, Rocket, Zap, Code } from 'lucide-react'

export default function HomePage() {
  const quickLinks = [
    {
      title: 'Introduction',
      description: 'Learn about the ATOM Club website and its features',
      icon: BookOpen,
      path: '/introduction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Getting Started',
      description: 'Installation and setup guide for the website',
      icon: Rocket,
      path: '/getting-started',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Understanding',
      description: 'Architecture and structure of the platform',
      icon: Code,
      path: '/understanding',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="relative inline-block">
          <Zap className="w-20 h-20 text-electric mx-auto mb-6 animate-pulse-glow" />
        </div>
        <h1 className="text-6xl font-bold mb-6">
          <span className="gradient-text">ATOM Club</span>
          <br />
          <span className="text-white">Documentation</span>
        </h1>
        <p className="text-xl text-metallic-text max-w-2xl mx-auto mb-8">
          Comprehensive user guide and documentation for the ATOM Club website. 
          Everything you need to manage and understand the platform.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/introduction" className="metallic-button">
            Get Started
          </Link>
          <Link to="/understanding" className="glass-card px-6 py-3 rounded-xl hover:shadow-glow transition-all">
            Learn More
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text text-center mb-8">Quick Start</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <Link
                key={idx}
                to={link.path}
                className="glass-card p-6 group hover:shadow-electric transition-all duration-300 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text">{link.title}</h3>
                <p className="text-card-text leading-relaxed">{link.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Complete installation guide',
            'Admin panel documentation',
            'Content management tutorials',
            'User management guides',
            'Event system documentation',
            'Troubleshooting tips',
            'Best practices',
            'FAQ section'
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-electric shimmer" />
              <span className="text-card-text">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
