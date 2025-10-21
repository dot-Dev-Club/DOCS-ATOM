import { Layers, Globe, Shield, Users, Layout, Database, Zap } from 'lucide-react'

export default function UnderstandingPage() {
  const sections = [
    {
      title: 'Home/Landing Page',
      description: 'The first page visitors see with hero section, about club, featured events, and latest projects.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      features: ['Hero Section with Club Logo', 'About ATOM Club', 'Upcoming Events', 'Featured Projects', 'Call-to-Action Buttons']
    },
    {
      title: 'Events Page',
      description: 'Displays all upcoming and past events with registration capabilities.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      features: ['Event Listings', 'Event Details', 'Registration Forms', 'Event Categories', 'Search & Filter']
    },
    {
      title: 'Projects/Gallery',
      description: 'Showcase of club projects and activities with images and descriptions.',
      icon: Layout,
      color: 'from-green-500 to-teal-500',
      features: ['Project Grid Layout', 'Image Galleries', 'Project Details', 'Category Filters', 'Lightbox View']
    },
    {
      title: 'Team/Members Page',
      description: 'Information about club members, coordinators, and executive team.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: ['Team Hierarchy', 'Member Profiles', 'Social Links', 'Role Descriptions', 'Contact Information']
    },
    {
      title: 'Contact Page',
      description: 'Contact form and club location information for inquiries.',
      icon: Database,
      color: 'from-pink-500 to-purple-500',
      features: ['Contact Form', 'Email Integration', 'Location Map', 'Social Media Links', 'Office Hours']
    },
    {
      title: 'Admin Panel',
      description: 'Comprehensive dashboard for managing website content and users.',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      features: ['Dashboard Analytics', 'Content Management', 'User Management', 'Event Management', 'Settings']
    }
  ]

  const architecture = [
    {
      layer: 'Frontend',
      tech: 'HTML, CSS, JavaScript, Bootstrap',
      description: 'User interface and client-side interactions'
    },
    {
      layer: 'Backend',
      tech: 'PHP 7.4+',
      description: 'Server-side logic and business rules'
    },
    {
      layer: 'Database',
      tech: 'MySQL 5.7+',
      description: 'Data storage and retrieval'
    },
    {
      layer: 'Server',
      tech: 'Apache/Nginx',
      description: 'Web server for hosting the application'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="glass-card p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-atom-primary/10 via-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-electric animate-pulse-glow" />
            <h1 className="text-5xl font-bold gradient-text">Understanding the Website</h1>
          </div>
          <p className="text-xl text-metallic-text mt-4 leading-relaxed">
            Learn about the structure, features, and architecture of the ATOM Club website.
          </p>
        </div>
      </div>

      {/* Website Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Website Overview</h2>
        <div className="glass-card p-6">
          <p className="text-lg text-card-text leading-relaxed mb-4">
            The ATOM Club website is a full-featured platform built to serve the needs of the club community. 
            It provides both public-facing pages for visitors and a powerful admin panel for club administrators.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { label: 'Public Pages', value: '6+', icon: Globe },
              { label: 'Admin Features', value: '10+', icon: Shield },
              { label: 'Database Tables', value: '8+', icon: Database }
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="glass-card p-4 text-center group hover:shadow-electric transition-all">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-electric group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-metallic-text">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Public Website Sections */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Public Website Sections</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 group hover:shadow-electric transition-all duration-300 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text">{section.title}</h3>
                <p className="text-card-text mb-4 leading-relaxed">{section.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-metallic-text mb-2">Key Features:</div>
                  {section.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-sm text-card-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Admin Panel Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
          <Shield className="w-8 h-8 text-atom-primary" />
          Admin Panel Overview
        </h2>
        <div className="glass-card p-6">
          <p className="text-lg text-card-text mb-6 leading-relaxed">
            The admin panel is a secure, feature-rich dashboard that allows authorized users to manage all aspects 
            of the website. Access is restricted by username and password authentication.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 gradient-text">Navigation</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { name: 'Dashboard', desc: 'Overview of site statistics and recent activity' },
              { name: 'Events', desc: 'Create, edit, and manage club events' },
              { name: 'Projects', desc: 'Upload and manage project galleries' },
              { name: 'Members', desc: 'Manage team members and user accounts' },
              { name: 'Content', desc: 'Edit pages, news, and announcements' },
              { name: 'Settings', desc: 'Configure website preferences and options' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-4 border-l-4 border-electric hover:shadow-electric transition-shadow">
                <div className="font-semibold text-atom-primary mb-1">{item.name}</div>
                <div className="text-sm text-card-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Key Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'User-Friendly Interface',
              description: 'Clean, intuitive design that makes navigation easy for all users.',
              icon: Layout
            },
            {
              title: 'Responsive Design',
              description: 'Optimized for all devices - desktop, tablet, and mobile.',
              icon: Globe
            },
            {
              title: 'Secure Access',
              description: 'Password-protected admin panel with role-based permissions.',
              icon: Shield
            },
            {
              title: 'Easy Content Management',
              description: 'Simple CRUD operations for managing events, projects, and members.',
              icon: Database
            }
          ].map((principle, idx) => {
            const Icon = principle.icon
            return (
              <div key={idx} className="glass-card p-6 group hover:shadow-electric transition-all">
                <Icon className="w-8 h-8 text-electric mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 gradient-text">{principle.title}</h3>
                <p className="text-card-text text-sm leading-relaxed">{principle.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Architecture Summary */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Architecture Summary</h2>
        <div className="glass-card p-6">
          <p className="text-card-text mb-6 leading-relaxed">
            The website follows a traditional LAMP stack architecture with the following layers:
          </p>
          <div className="space-y-4">
            {architecture.map((layer, idx) => (
              <div key={idx} className="glass-card p-4 border-l-4 border-electric hover:shadow-electric transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg gradient-text">{layer.layer}</h3>
                  <code className="px-3 py-1 rounded bg-electric/10 text-electric text-sm">{layer.tech}</code>
                </div>
                <p className="text-sm text-card-text">{layer.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 glass-card bg-gradient-to-r from-electric/5 to-atom-primary/5 border border-electric/20">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
              <div className="text-sm text-card-text">
                <strong className="text-electric">Performance Tip:</strong> The website uses modern coding practices 
                and optimized database queries to ensure fast loading times and smooth user experience.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
