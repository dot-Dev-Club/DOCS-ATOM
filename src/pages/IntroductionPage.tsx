import { Users, Target, Sparkles, CheckCircle2 } from 'lucide-react'

export default function IntroductionPage() {
  const targetAudience = [
    {
      title: 'Students',
      description: 'Club members who want to stay updated with events and activities',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Administrators',
      description: 'Faculty and student leaders managing the website and content',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Developers',
      description: 'Technical team members maintaining and customizing the platform',
      icon: Sparkles,
      color: 'from-green-500 to-teal-500'
    }
  ]

  const features = [
    'Modern and responsive design',
    'User-friendly admin panel',
    'Event management system',
    'Gallery and media management',
    'User registration and authentication',
    'Role-based access control',
    'Contact form integration',
    'SEO optimized structure'
  ]

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="glass-card p-8">
        <h1 className="text-4xl font-bold gradient-text mb-6">Introduction to ATOM Club Website</h1>
        <p className="text-card-text leading-relaxed mb-4">
          Welcome to the ATOM Club website documentation. This comprehensive guide will help you understand, 
          install, and manage the ATOM Club platform effectively.
        </p>
        <p className="text-card-text leading-relaxed mb-4">
          The ATOM Club website is a modern web application designed to facilitate club activities, 
          event management, and member engagement. Built with PHP and MySQL, it provides a robust 
          platform for managing your tech club's online presence.
        </p>
        <p className="text-card-text leading-relaxed">
          This documentation covers everything from basic installation to advanced customization, 
          ensuring you can make the most of the platform's features.
        </p>
      </section>

      {/* Target Audience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Who Is This For?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {targetAudience.map((audience, idx) => {
            const Icon = audience.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} p-3 mb-4 shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text">{audience.title}</h3>
                <p className="text-card-text leading-relaxed">{audience.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Key Features */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 shimmer" />
              <span className="text-card-text">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Structure */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Documentation Structure</h2>
        <p className="text-card-text leading-relaxed mb-6">
          This documentation is organized into several sections to help you find information quickly:
        </p>
        <div className="space-y-4">
          {[
            { title: 'Getting Started', desc: 'Installation, setup, and initial configuration' },
            { title: 'Understanding the Website', desc: 'Architecture, structure, and key components' },
            { title: 'Navigating the Interface', desc: 'Guide to the public and admin interfaces' },
            { title: 'Admin Panel', desc: 'Complete guide to administrative features' },
            { title: 'Managing Content', desc: 'How to create and update website content' },
            { title: 'Troubleshooting', desc: 'Common issues and their solutions' },
            { title: 'Best Practices', desc: 'Tips for optimal usage and maintenance' }
          ].map((section, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{section.title}</h3>
                <p className="text-card-text text-sm">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
