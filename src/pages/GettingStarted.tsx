import { Rocket, Download, Play, CheckCircle, Terminal, Package, FolderGit, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part1_GettingStarted() {
  const prerequisites = [
    { label: 'Node.js', value: 'v16 or higher', icon: Terminal },
    { label: 'Package Manager', value: 'npm or yarn', icon: Package },
    { label: 'Git', value: 'Version control system', icon: FolderGit },
    { label: 'Code Editor', value: 'VS Code recommended', icon: Terminal }
  ]

  const installSteps = [
    {
      title: 'Clone the repository',
      code: `git clone https://github.com/atom-association/website.git
cd atom-website`
    },
    {
      title: 'Install dependencies',
      code: `npm install`
    },
    {
      title: 'Set up environment variables',
      code: `cp .env.example .env
# Edit .env with your configuration`
    },
    {
      title: 'Start the development server',
      code: `npm run dev`
    }
  ]

  const quickStartSteps = [
    'After installation, visit http://localhost:5173 in your browser',
    'You should see the ATOM website homepage',
    'The development server supports hot reload',
    'Changes you make will be reflected immediately'
  ]

  const nextSteps = [
    'Explore the content management system',
    'Learn about the admin panel features',
    'Review the developer guide for customization'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Rocket className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Getting Started</h1>
            <p className="text-card-text mt-2">Your first steps with the ATOM website</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Welcome to the ATOM Association Website documentation. This guide will help you get up and running quickly 
          with installation, setup, and your first deployment.
        </p>
      </section>

      {/* What is ATOM */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">What is ATOM?</h2>
        <div className="glass-card p-6">
          <p className="text-card-text leading-relaxed mb-4">
            The ATOM Association Website serves as the digital hub for all departmental activities at 
            Karunya Institute of Technology & Science. It provides a comprehensive platform for:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Event management', 'Gallery showcases', 'Team information', 'Administrative controls'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-electric shimmer" />
                <span className="text-card-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Download className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Prerequisites</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {prerequisites.map((req, idx) => {
            const Icon = req.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 hover:shadow-electric transition-all animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-electric mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">{req.label}</div>
                    <div className="text-sm text-card-text">{req.value}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Installation Steps */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <Play className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Installation Steps</h2>
        </div>

        <div className="space-y-4">
          {installSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <pre className="text-sm text-gray-200 overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="glass-card p-8 bg-gradient-to-br from-atom-primary/5 to-electric/5 border-2 border-electric/30">
        <h2 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-2">
          <Rocket className="w-6 h-6" />
          Quick Start
        </h2>
        <div className="space-y-3">
          {quickStartSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-electric mt-0.5 flex-shrink-0" />
              <p className="text-card-text">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-black/40 rounded-lg border border-electric/30">
          <code className="text-electric">http://localhost:5173</code>
        </div>
      </section>

      {/* Next Steps */}
      <section className="glass-card p-6">
        <h2 className="text-2xl font-bold gradient-text mb-4">📚 Next Steps</h2>
        <div className="space-y-3">
          {nextSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
              <span className="text-card-text">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to Next Part */}
      <section className="glass-card p-6 bg-gradient-to-r from-atom-primary/10 to-electric/10 border-2 border-electric/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Ready for the next step?</h3>
            <p className="text-card-text">Continue to Content Management</p>
          </div>
          <Link
            to="/docs/part2"
            className="metallic-button flex items-center gap-2 group"
          >
            Next Part
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
