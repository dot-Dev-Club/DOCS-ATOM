import { Layout, Users, Settings, FileText, Calendar, Image, Mail } from 'lucide-react'

export default function NavigatingPage() {
  const publicPages = [
    {
      title: 'Home Page',
      icon: Layout,
      description: 'Landing page with club overview, featured events, and latest updates',
      features: ['Hero banner', 'Featured events carousel', 'Latest news', 'Quick links']
    },
    {
      title: 'Events',
      icon: Calendar,
      description: 'Browse upcoming and past events with details and registration',
      features: ['Event listings', 'Event details', 'Registration forms', 'Event calendar']
    },
    {
      title: 'Gallery',
      icon: Image,
      description: 'Photo galleries from club activities and events',
      features: ['Album view', 'Lightbox gallery', 'Image categories', 'Download options']
    },
    {
      title: 'Team',
      icon: Users,
      description: 'Meet the club members and leadership team',
      features: ['Team profiles', 'Role descriptions', 'Contact information', 'Social links']
    },
    {
      title: 'Contact',
      icon: Mail,
      description: 'Get in touch with the club through contact form',
      features: ['Contact form', 'Location map', 'Social media links', 'Office hours']
    }
  ]

  const adminSections = [
    {
      title: 'Dashboard',
      description: 'Overview of website statistics and quick access to key features',
      items: ['Total users', 'Recent events', 'Gallery statistics', 'Quick actions']
    },
    {
      title: 'Content Management',
      description: 'Manage pages, posts, and website content',
      items: ['Page editor', 'Blog posts', 'Media library', 'Content categories']
    },
    {
      title: 'Event Management',
      description: 'Create, edit, and manage club events',
      items: ['Add events', 'Edit events', 'Event registrations', 'Event categories']
    },
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      items: ['User list', 'Add/edit users', 'Role assignment', 'User permissions']
    },
    {
      title: 'Gallery Management',
      description: 'Upload and organize photos',
      items: ['Upload images', 'Create albums', 'Edit captions', 'Delete images']
    },
    {
      title: 'Settings',
      description: 'Configure website settings and preferences',
      items: ['General settings', 'Email configuration', 'Social media links', 'SEO settings']
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <h1 className="text-4xl font-bold gradient-text mb-6">Navigating the Website</h1>
        <p className="text-card-text leading-relaxed">
          The ATOM Club website is divided into two main areas: the public-facing website and the admin panel. 
          This guide will help you understand both interfaces and how to navigate them effectively.
        </p>
      </section>

      {/* Public Pages */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Public Website Pages</h2>
        <p className="text-card-text leading-relaxed">
          The public website is accessible to all visitors and contains the following main sections:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {publicPages.map((page, idx) => {
            const Icon = page.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 animate-slide-down"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-atom-primary to-electric p-2.5 shadow-glow flex-shrink-0">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 gradient-text">{page.title}</h3>
                    <p className="text-card-text text-sm">{page.description}</p>
                  </div>
                </div>
                <div className="space-y-2 ml-16">
                  {page.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                      <span className="text-card-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Admin Navigation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Admin Panel Navigation</h2>
        <p className="text-card-text leading-relaxed mb-6">
          The admin panel provides comprehensive tools for managing your website. Access it by logging in at <code className="px-2 py-1 rounded bg-white/10 text-electric">/admin</code>
        </p>
        <div className="space-y-4">
          {adminSections.map((section, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{section.title}</h3>
                  <p className="text-card-text mb-4">{section.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                        <Settings className="w-4 h-4 text-electric flex-shrink-0" />
                        <span className="text-card-text text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Tips */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Navigation Tips</h2>
        <div className="space-y-4">
          {[
            { tip: 'Use the main navigation menu', detail: 'Located at the top of every page for quick access to main sections' },
            { tip: 'Breadcrumb navigation', detail: 'Shows your current location and allows easy navigation to parent pages' },
            { tip: 'Admin sidebar menu', detail: 'Collapsible sidebar in the admin panel for accessing all management features' },
            { tip: 'Search functionality', detail: 'Use the search bar to quickly find content, events, or users' },
            { tip: 'Quick actions', detail: 'Dashboard widgets provide shortcuts to common tasks' },
            { tip: 'User profile menu', detail: 'Access your profile, settings, and logout from the top-right dropdown' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.tip}</h4>
                <p className="text-card-text text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
