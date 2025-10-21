import { Lightbulb, Shield, Zap, Users, CheckCircle2, Star } from 'lucide-react'

export default function BestPracticesPage() {
  const categories = [
    {
      title: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      practices: [
        'Change default admin credentials immediately',
        'Use strong, unique passwords (min 12 characters)',
        'Enable two-factor authentication',
        'Keep software and plugins updated',
        'Regular backup of database and files',
        'Use HTTPS for all admin access',
        'Limit admin access to trusted users',
        'Monitor login attempts and activity logs'
      ]
    },
    {
      title: 'Content Management',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      practices: [
        'Write clear, concise content',
        'Use descriptive titles and headings',
        'Optimize images before uploading',
        'Add alt text to all images for accessibility',
        'Maintain consistent tone and style',
        'Proofread before publishing',
        'Update outdated content regularly',
        'Use categories and tags effectively'
      ]
    },
    {
      title: 'Performance',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      practices: [
        'Enable caching mechanisms',
        'Compress images (use WebP when possible)',
        'Minimize CSS and JavaScript files',
        'Use lazy loading for images',
        'Optimize database queries',
        'Remove unused plugins and themes',
        'Use CDN for static assets',
        'Monitor page load times regularly'
      ]
    },
    {
      title: 'User Experience',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      practices: [
        'Ensure mobile responsiveness',
        'Maintain consistent navigation',
        'Use clear call-to-action buttons',
        'Provide helpful error messages',
        'Keep forms simple and short',
        'Test on multiple devices and browsers',
        'Ensure fast page load times',
        'Make content easily scannable'
      ]
    }
  ]

  const maintenanceTasks = [
    { frequency: 'Daily', tasks: ['Monitor error logs', 'Check website availability', 'Review new user registrations'] },
    { frequency: 'Weekly', tasks: ['Review and moderate comments', 'Check and respond to contact form submissions', 'Update featured content'] },
    { frequency: 'Monthly', tasks: ['Database backup', 'Review security logs', 'Update software and plugins', 'Analyze website analytics'] },
    { frequency: 'Quarterly', tasks: ['Full system audit', 'Review user permissions', 'Test disaster recovery', 'Content quality review'] }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Star className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Best Practices</h1>
            <p className="text-card-text mt-2">Guidelines for optimal website management</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Follow these best practices to maintain a secure, fast, and user-friendly ATOM Club website.
        </p>
      </section>

      {/* Best Practices by Category */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold gradient-text">Best Practices by Category</h2>
        {categories.map((category, idx) => {
          const Icon = category.icon
          return (
            <div
              key={idx}
              className="glass-card p-8 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-3 shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {category.practices.map((practice, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-card-text">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Maintenance Schedule */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Maintenance Schedule</h2>
        <p className="text-card-text leading-relaxed">
          Regular maintenance keeps your website secure and running smoothly:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {maintenanceTasks.map((schedule, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-atom-primary to-electric text-white font-bold">
                  {schedule.frequency}
                </div>
              </div>
              <div className="space-y-3">
                {schedule.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {tIdx + 1}
                    </div>
                    <span className="text-card-text text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Strategy */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Content Strategy</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">Planning</h3>
              <div className="space-y-2">
                {[
                  'Create content calendar for events and posts',
                  'Maintain consistent posting schedule',
                  'Plan content themes in advance',
                  'Coordinate with team members'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-electric shimmer mt-2" />
                    <span className="text-card-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">Quality</h3>
              <div className="space-y-2">
                {[
                  'Always preview before publishing',
                  'Use high-quality, relevant images',
                  'Write engaging headlines',
                  'Include clear calls-to-action'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-electric shimmer mt-2" />
                    <span className="text-card-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Best Practices */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">SEO Best Practices</h2>
        <div className="space-y-3">
          {[
            { practice: 'Use descriptive URLs', example: '/events/tech-workshop-2024 instead of /events?id=123' },
            { practice: 'Write unique meta descriptions', example: 'Compelling 150-160 character descriptions for each page' },
            { practice: 'Optimize page titles', example: 'Include keywords, keep under 60 characters' },
            { practice: 'Use header tags properly', example: 'H1 for main title, H2 for sections, H3 for subsections' },
            { practice: 'Add alt text to images', example: 'Descriptive text explaining what the image shows' },
            { practice: 'Internal linking', example: 'Link related pages and content together' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-2">{item.practice}</h4>
              <p className="text-card-text text-sm italic">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backup Strategy */}
      <section className="glass-card p-6 border-l-4 border-green-500">
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Backup Strategy</h3>
            <p className="text-card-text mb-4">
              Regular backups protect your data from loss due to hardware failure, hacking, or human error:
            </p>
            <div className="space-y-2">
              {[
                'Backup database daily (automated if possible)',
                'Backup files weekly (images, themes, plugins)',
                'Store backups in multiple locations (local + cloud)',
                'Test backup restoration periodically',
                'Keep at least 3 recent backup copies',
                'Document backup and restoration procedures'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-text text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
