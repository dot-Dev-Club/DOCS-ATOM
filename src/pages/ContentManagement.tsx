import { FileEdit, Calendar, Users, Image, CheckCircle, AlertCircle, LayoutDashboard, Settings, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part2_ContentManagement() {
  const eventSteps = [
    'Navigate to Admin Panel → Events → Create New',
    'Fill in event details (title, description, date, location)',
    'Upload event banner and gallery images',
    'Set event status (upcoming, ongoing, completed)',
    'Click "Publish" to make it live'
  ]

  const teamFields = [
    { label: 'Name & Role', desc: 'Full name and position (e.g., "President", "Tech Lead")' },
    { label: 'Profile Photo', desc: 'Square image (500x500 recommended)' },
    { label: 'Bio', desc: 'Brief description of responsibilities and achievements' },
    { label: 'Social Links', desc: 'LinkedIn, GitHub, Email (optional)' }
  ]

  const bestPractices = [
    'Use compressed images (under 500KB)',
    'Maintain consistent aspect ratios',
    'Add descriptive alt text',
    'Organize by event categories'
  ]

  const avoidList = [
    'Uploading raw camera files',
    'Blurry or low-quality images',
    'Images with copyrighted content',
    'Duplicate photos'
  ]

  const guidelines = [
    { title: 'Consistency', desc: 'Maintain consistent formatting and tone across all content' },
    { title: 'Accuracy', desc: 'Double-check dates, names, and technical details' },
    { title: 'Accessibility', desc: 'Use descriptive text for images and links' },
    { title: 'Professionalism', desc: 'Keep content appropriate and representative of ATOM' }
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
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <FileEdit className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Content Management</h1>
            <p className="text-card-text mt-2">Learn to manage events, team members, and media</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          The ATOM website includes a powerful content management system that allows authorized users 
          to update website content without touching code. All changes are made through an intuitive admin interface.
        </p>
      </section>

      {/* Admin Panel Navigation */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <LayoutDashboard className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Admin Panel Navigation</h2>
        </div>
        
        <p className="text-card-text leading-relaxed">
          The admin panel provides comprehensive tools for managing your website. Access it by logging in at{' '}
          <code className="px-2 py-1 rounded bg-white/10 text-electric">/admin</code>
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

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Content Management Overview</h2>
        <div className="glass-card p-6">
          <p className="text-card-text leading-relaxed">
            All content can be managed through the admin panel with an easy-to-use interface. 
            No coding knowledge required - simply log in and start updating.
          </p>
        </div>
      </section>

      {/* Managing Events */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 shadow-glow">
            <Calendar className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Managing Events</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Events are the heart of the ATOM website. They can be created, edited, and deleted through the admin panel.
          </p>
          
          <div className="bg-black/40 p-5 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-electric mb-4">Creating an Event</h3>
            <div className="space-y-3">
              {eventSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-card-text mt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-atom-primary/10 to-electric/10 p-5 rounded-lg border border-electric/30">
            <p className="text-sm text-card-text">
              <strong className="text-electric">💡 Pro Tip:</strong> Use high-quality images (1920x1080 recommended) 
              for event banners to ensure they look great on all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Team Members */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <Users className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Managing Team Members</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Team member profiles can be added and updated to showcase the ATOM leadership and core team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {teamFields.map((field, idx) => (
              <div
                key={idx}
                className="bg-black/40 p-4 rounded-lg border border-white/10 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h4 className="font-semibold text-electric mb-2">{field.label}</h4>
                <p className="text-sm text-card-text">{field.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Management */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-2.5 shadow-glow">
            <Image className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Gallery Management</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            The gallery section showcases photos from ATOM events and activities. Images are organized 
            by event and can be tagged with categories.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-black/40 p-5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-white">Best Practices</h3>
              </div>
              <ul className="space-y-2 text-sm text-card-text">
                {bestPractices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-electric">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/40 p-5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Avoid</h3>
              </div>
              <ul className="space-y-2 text-sm text-card-text">
                {avoidList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Guidelines */}
      <section className="glass-card p-8 border-2 border-electric/30">
        <h2 className="text-2xl font-bold gradient-text mb-6">📋 Content Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {guidelines.map((guideline, idx) => (
            <div
              key={idx}
              className="space-y-2 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="font-semibold text-electric">{guideline.title}</h3>
              <p className="text-sm text-card-text">{guideline.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to Next/Previous Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/getting-started"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Getting Started</p>
            </div>
          </div>
        </Link>
        <Link
          to="/docs/developer-guide"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Next</p>
              <p className="font-semibold gradient-text">Developer Guide</p>
            </div>
            <ArrowRight className="w-5 h-5 text-electric group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
