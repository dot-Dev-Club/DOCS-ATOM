import { Link } from 'react-router-dom'
import { Rocket, Zap, Code, FileEdit, Terminal, Wrench, Star, Shield } from 'lucide-react'

export default function HomePage() {
  const masterDocumentation = [
    {
      title: 'Getting Started',
      description: 'Installation, setup, and your first deployment',
      icon: Rocket,
      path: '/docs/part1',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Content Management',
      description: 'Managing content, events, team, and gallery',
      icon: FileEdit,
      path: '/docs/part2',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Developer Guide',
      description: 'Technical documentation and API reference',
      icon: Code,
      path: '/docs/part3',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Technical Leads',
      description: 'Leadership, team management, and user roles',
      icon: Shield,
      path: '/docs/part4',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Operations & Maintenance',
      description: 'Monitoring, backups, and troubleshooting',
      icon: Wrench,
      path: '/docs/part5',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Deployment & Production',
      description: 'Production deployment and security',
      icon: Terminal,
      path: '/docs/part6',
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Reference & Best Practices',
      description: 'Quick reference, FAQ, and best practices',
      icon: Star,
      path: '/docs/part7',
      color: 'from-yellow-500 to-orange-500'
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
          <Link to="/docs/part1" className="metallic-button">
            Get Started
          </Link>
          <Link to="/docs/part3" className="glass-card px-6 py-3 rounded-xl hover:shadow-glow transition-all">
            Developer Guide
          </Link>
        </div>
      </section>

      {/* Master Documentation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text text-center mb-8">Master Documentation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterDocumentation.map((doc, idx) => {
            const Icon = doc.icon
            return (
              <Link
                key={idx}
                to={doc.path}
                className="glass-card p-6 group hover:shadow-electric transition-all duration-300 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.color} p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text">{doc.title}</h3>
                <p className="text-card-text leading-relaxed">{doc.description}</p>
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
            'Complete installation and setup guide',
            'Content and event management',
            'Developer API documentation',
            'Team and user management',
            'Operations and maintenance guides',
            'Production deployment strategies',
            'Best practices and FAQ',
            'Troubleshooting and support'
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
