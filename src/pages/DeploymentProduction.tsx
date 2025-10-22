import { Rocket, Server, Cloud, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part6_DeploymentProduction() {
  const checklist = [
    { label: 'All tests passing', cmd: 'npm run test' },
    { label: 'Build successful', cmd: 'npm run build' },
    { label: 'Environment variables', desc: 'Configured for production' },
    { label: 'Database backup', desc: 'Recent backup verified' },
    { label: 'SSL certificate', desc: 'Valid and properly configured' },
    { label: 'Code review', desc: 'All changes approved' }
  ]

  const verificationSteps = [
    'Homepage loads correctly',
    'Navigation works properly',
    'API connectivity verified',
    'Images display correctly',
    'Forms submit successfully',
    'Admin panel accessible',
    'Mobile responsive',
    'SSL active (HTTPS)'
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
            <h1 className="text-4xl font-bold gradient-text">Deployment & Production</h1>
            <p className="text-card-text mt-2">Deploy to production environments</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Complete guide to deploying the ATOM website to production environments safely and efficiently.
        </p>
      </section>

      {/* Pre-Deployment Checklist */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-2.5 shadow-glow">
            <CheckCircle2 className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Pre-Deployment Checklist</h2>
        </div>

        <div className="glass-card p-6 space-y-3">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <input type="checkbox" className="mt-1" disabled />
              <div className="flex-1">
                <strong className="text-electric">{item.label}:</strong>
                {item.cmd && (
                  <pre className="bg-black/60 p-2 rounded text-xs mt-1 text-gray-200 inline-block ml-2">
                    {item.cmd}
                  </pre>
                )}
                {item.desc && <span className="text-card-text ml-2">{item.desc}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hosting Options */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Cloud className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Hosting Options</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4 bg-gradient-to-br from-atom-primary/10 to-electric/10 border-2 border-electric/30">
            <h3 className="text-xl font-semibold gradient-text">Vercel (Recommended)</h3>
            <ul className="space-y-2 text-sm text-card-text">
              <li>✓ Zero-config deployment</li>
              <li>✓ Automatic HTTPS</li>
              <li>✓ Global CDN</li>
              <li>✓ Git integration</li>
              <li>✓ Free for hobby projects</li>
            </ul>
            <div className="bg-black/60 p-3 rounded text-xs text-gray-200">
              <pre>{`# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod`}</pre>
            </div>
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold text-electric">Netlify</h3>
            <ul className="space-y-2 text-sm text-card-text">
              <li>✓ Continuous deployment</li>
              <li>✓ Form handling</li>
              <li>✓ Functions support</li>
              <li>✓ Split testing</li>
              <li>✓ Free SSL</li>
            </ul>
            <div className="bg-black/60 p-3 rounded text-xs text-gray-200">
              <pre>{`# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Configuration */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <Server className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Environment Configuration</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Set up production environment variables in your hosting platform:
          </p>

          <div className="bg-black/40 p-4 rounded-lg border border-white/10">
            <pre className="text-sm text-gray-200 overflow-x-auto">
{`# API Configuration
VITE_API_URL=https://api.atom.karunya.edu
VITE_API_KEY=your_production_api_key

# Database
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/atom

# Authentication
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRY=7d

# Image Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key

# Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X`}
            </pre>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
            <p className="text-sm text-card-text">
              <strong className="text-red-400">🔒 Security:</strong> Never commit .env files to Git. 
              Use secure secret management tools for production credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Post-Deployment Verification */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Post-Deployment Verification</h2>
        
        <div className="glass-card p-6 space-y-3">
          <p className="text-card-text leading-relaxed mb-4">
            After deployment, verify everything works correctly:
          </p>
          
          {verificationSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-electric mt-0.5 flex-shrink-0" />
              <span className="text-card-text">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rollback Procedure */}
      <section className="glass-card p-6 border-2 border-red-500/30 bg-red-500/5">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h2 className="text-2xl font-bold text-red-400">Rollback Procedure</h2>
        </div>
        
        <p className="text-card-text leading-relaxed mb-4">
          If deployment fails or critical issues arise:
        </p>

        <div className="bg-black/40 p-4 rounded-lg border border-red-500/20">
          <pre className="text-sm text-gray-200 overflow-x-auto">
{`# Using Vercel
vercel rollback

# Using Git
git revert HEAD
git push origin main

# Manual revert
git checkout <previous-commit-hash>
git push origin main --force`}
          </pre>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg mt-4">
          <p className="text-sm text-card-text">
            <strong>Important:</strong> Always communicate rollback to team and document the reason.
          </p>
        </div>
      </section>

      {/* Navigation to Next/Previous Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/operations-maintenance"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Operations & Maintenance</p>
            </div>
          </div>
        </Link>
        <Link
          to="/docs/reference-best-practices"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Next</p>
              <p className="font-semibold gradient-text">Reference & Best Practices</p>
            </div>
            <ArrowRight className="w-5 h-5 text-electric group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
