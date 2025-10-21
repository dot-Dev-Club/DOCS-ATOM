import { Shield, Key, LayoutDashboard, Settings, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function AdminPanelPage() {
  const accessSteps = [
    {
      title: 'Navigate to Admin Login',
      description: 'Open your browser and go to your website URL followed by /admin',
      example: 'https://yourwebsite.com/admin'
    },
    {
      title: 'Enter Credentials',
      description: 'Use your admin username and password',
      example: 'Default: Username: admin, Password: admin123'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'If enabled, enter the verification code from your authenticator app',
      example: '6-digit code (if 2FA is enabled)'
    }
  ]

  const dashboardFeatures = [
    {
      title: 'Statistics Overview',
      items: ['Total registered users', 'Upcoming events count', 'Gallery images count', 'Recent activity log']
    },
    {
      title: 'Quick Actions',
      items: ['Add new event', 'Create blog post', 'Upload images', 'Manage users']
    },
    {
      title: 'Recent Activity',
      items: ['Latest user registrations', 'Recent content updates', 'System notifications', 'Error logs']
    }
  ]

  const securityPractices = [
    'Change default admin credentials immediately after installation',
    'Use strong passwords with mix of characters, numbers, and symbols',
    'Enable two-factor authentication for admin accounts',
    'Regularly update admin passwords (every 3-6 months)',
    'Limit admin access to trusted users only',
    'Monitor admin activity logs regularly',
    'Use HTTPS for admin panel access',
    'Logout after completing admin tasks'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Shield className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Admin Panel Guide</h1>
            <p className="text-card-text mt-2">Complete guide to accessing and using the admin panel</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          The admin panel is the control center of your ATOM Club website. It provides comprehensive tools 
          for managing content, users, events, and all aspects of your website.
        </p>
      </section>

      {/* Accessing Admin Panel */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Accessing the Admin Panel</h2>
        <div className="space-y-4">
          {accessSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{step.title}</h3>
                  <p className="text-card-text mb-3">{step.description}</p>
                  <div className="px-4 py-3 rounded-lg bg-white/5 border border-electric/30">
                    <code className="text-electric text-sm">{step.example}</code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Default Credentials Warning */}
      <section className="glass-card p-6 border-l-4 border-orange-500">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Important Security Notice</h3>
            <p className="text-card-text mb-3">
              The default admin credentials are:
            </p>
            <div className="space-y-2 mb-4">
              <div className="px-4 py-2 rounded-lg bg-white/5">
                <span className="text-metallic-text">Username: </span>
                <code className="text-electric">admin</code>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/5">
                <span className="text-metallic-text">Password: </span>
                <code className="text-electric">admin123</code>
              </div>
            </div>
            <p className="text-orange-400 font-semibold">
              ⚠️ Change these credentials immediately after your first login for security!
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Dashboard Features</h2>
        <p className="text-card-text leading-relaxed">
          The admin dashboard provides an at-a-glance view of your website's status and quick access to important features:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {dashboardFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 shadow-glow">
                <LayoutDashboard className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
              <div className="space-y-2">
                {feature.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                    <span className="text-card-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Menu Structure */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Admin Menu Structure</h2>
        <p className="text-card-text mb-6">
          The admin panel sidebar contains the following main sections:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { menu: 'Dashboard', desc: 'Main overview and statistics' },
            { menu: 'Content', desc: 'Manage pages and blog posts' },
            { menu: 'Events', desc: 'Create and manage events' },
            { menu: 'Users', desc: 'User management and roles' },
            { menu: 'Gallery', desc: 'Image and album management' },
            { menu: 'Messages', desc: 'Contact form submissions' },
            { menu: 'Settings', desc: 'Website configuration' },
            { menu: 'Appearance', desc: 'Theme and customization' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Settings className="w-5 h-5 text-electric flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">{item.menu}</h4>
                <p className="text-card-text text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Security Best Practices</h2>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Key className="w-6 h-6 text-electric" />
            <h3 className="text-xl font-semibold gradient-text">Keep Your Admin Panel Secure</h3>
          </div>
          <div className="space-y-3">
            {securityPractices.map((practice, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 animate-fade-in"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-card-text">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
