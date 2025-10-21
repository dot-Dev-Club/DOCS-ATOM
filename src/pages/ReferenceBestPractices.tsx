import { BookOpen, Lightbulb, Shield, Zap, ExternalLink, HelpCircle, ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part7_ReferenceBestPractices() {
  const dos = [
    'Use TypeScript for type safety',
    'Write descriptive variable names',
    'Add comments for complex logic',
    'Keep components small and focused',
    'Use custom hooks for reusability',
    'Implement error boundaries',
    'Follow ESLint rules',
    'Write unit tests for utilities'
  ]

  const donts = [
    'Avoid any type in TypeScript',
    "Don't mutate state directly",
    'Avoid inline styles (use Tailwind)',
    "Don't commit console.log statements",
    'Avoid deeply nested components',
    "Don't ignore TypeScript errors",
    'Avoid large component files (> 300 lines)',
    "Don't skip code reviews"
  ]

  const securityRules = [
    'Sanitize user inputs - Always validate and sanitize data',
    'No secrets in code - Use environment variables',
    'HTTPS only - Never transmit sensitive data over HTTP',
    'XSS prevention - Avoid dangerouslySetInnerHTML',
    'CORS policy - Restrict API access to trusted domains'
  ]

  const accessibilityGuidelines = [
    'Use alt text for all images',
    'Ensure sufficient color contrast (WCAG AA)',
    'Make interactive elements keyboard accessible',
    'Add skip-to-content links',
    'Test with screen readers'
  ]

  const frequentlyAskedQuestions = [
    {
      q: 'How do I access the admin panel for the first time?',
      a: 'Navigate to /admin and login with default credentials (username: admin, password: admin123). Change immediately after first login.'
    },
    {
      q: 'What image formats are supported?',
      a: 'JPG, JPEG, PNG, and GIF formats. Maximum 5MB per image, recommended under 2MB for best performance.'
    },
    {
      q: 'How do I create and manage events?',
      a: 'Go to admin panel → Events → Add New Event. Fill in details, upload images, enable registration, and publish.'
    },
    {
      q: 'What are the different user roles?',
      a: 'Administrator (full access), Editor (content management), Member (basic access). Assign in User Management.'
    },
    {
      q: 'How do I change website colors and logo?',
      a: 'Go to admin panel → Appearance → Theme Settings. Upload logo and customize colors.'
    },
    {
      q: 'Can attendees register for events online?',
      a: 'Yes, enable registration when creating event. Users register through event page, manage in admin panel.'
    }
  ]

  const commands = {
    development: [
      { cmd: 'npm run dev', desc: 'Start dev server' },
      { cmd: 'npm run build', desc: 'Production build' },
      { cmd: 'npm run preview', desc: 'Preview build' },
      { cmd: 'npm run lint', desc: 'Run ESLint' }
    ],
    git: [
      { cmd: 'git pull origin main', desc: 'Pull latest' },
      { cmd: 'git checkout -b feature/new', desc: 'New branch' },
      { cmd: 'git add .', desc: 'Stage changes' },
      { cmd: 'git commit -m "feat: ..."', desc: 'Commit' }
    ]
  }

  const resources = {
    docs: [
      { name: 'React Official Docs', url: 'https://react.dev' },
      { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs' },
      { name: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs' },
      { name: 'Lucide Icons', url: 'https://lucide.dev' }
    ],
    tools: [
      { name: 'Vite Build Tool', url: 'https://vitejs.dev' },
      { name: 'Vercel Deployment', url: 'https://vercel.com' },
      { name: 'MongoDB Database', url: 'https://www.mongodb.com' },
      { name: 'ESLint Linter', url: 'https://eslint.org' }
    ]
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <BookOpen className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Reference & Best Practices</h1>
            <p className="text-card-text mt-2">Quick reference and coding standards</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Quick reference guide and best practices for ATOM website development - coding standards, security, 
          accessibility, and useful resources.
        </p>
      </section>

      {/* Coding Standards */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-2.5 shadow-glow">
            <Zap className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Coding Standards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-green-400">✅ Do's</h3>
            {dos.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 animate-slide-down"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="text-green-400">✓</span>
                <span className="text-card-text text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-red-400">❌ Don'ts</h3>
            {donts.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 animate-slide-down"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="text-red-400">✗</span>
                <span className="text-card-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* React Best Practices */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Lightbulb className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">React Best Practices</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-electric">Component Structure</h3>
          <div className="bg-black/40 p-4 rounded-lg border border-white/10">
            <pre className="text-sm text-gray-200 overflow-x-auto">
{`// ✅ Good: Functional component with proper typing
import { FC } from 'react';

interface EventCardProps {
  title: string;
  date: Date;
  image: string;
}

export const EventCard: FC<EventCardProps> = ({ title, date, image }) => {
  return (
    <div className="glass-card p-6">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <time>{date.toLocaleDateString()}</time>
    </div>
  );
};`}
            </pre>
          </div>

          <div className="bg-gradient-to-br from-atom-primary/10 to-electric/10 p-4 rounded-lg border border-electric/30">
            <h3 className="text-lg font-semibold text-electric mb-2">Performance Tips</h3>
            <ul className="space-y-2 text-sm text-card-text">
              <li>• Use React.memo() for expensive components</li>
              <li>• Implement useMemo() for heavy computations</li>
              <li>• Use useCallback() for callback functions</li>
              <li>• Lazy load routes with React.lazy()</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-2.5 shadow-glow">
            <Shield className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Security Best Practices</h2>
        </div>

        <div className="glass-card p-6 bg-red-500/5 border-2 border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">🔒 Critical Security Rules</h3>
          <div className="space-y-3">
            {securityRules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span className="text-card-text text-sm">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Guidelines */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">♿ Accessibility Guidelines</h2>
        
        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Make the ATOM website accessible to all users:
          </p>
          
          <div className="space-y-2">
            {accessibilityGuidelines.map((guideline, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                <span className="text-card-text">{guideline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <HelpCircle className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-3">
          {frequentlyAskedQuestions.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card p-5 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-xs font-bold flex-shrink-0">
                  Q
                </div>
                {faq.q}
              </h3>
              <p className="text-card-text text-sm ml-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Command Reference */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">📖 Quick Command Reference</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-electric">Development</h3>
            {commands.development.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <code className="px-2 py-1 bg-black/60 rounded text-electric text-xs font-mono">
                  {item.cmd}
                </code>
                <span className="text-card-text text-sm mt-1">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-electric">Git Commands</h3>
            {commands.git.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <code className="px-2 py-1 bg-black/60 rounded text-electric text-xs font-mono inline-block">
                  {item.cmd}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Resources */}
      <section className="glass-card p-8 border-2 border-electric/30">
        <h2 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-2">
          <ExternalLink className="w-6 h-6" />
          Useful Resources
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-electric">Documentation</h3>
            {resources.docs.map((resource, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                <a 
                  href={resource.url} 
                  className="text-card-text hover:text-electric transition-colors text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-electric">Tools</h3>
            {resources.tools.map((resource, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                <a 
                  href={resource.url} 
                  className="text-card-text hover:text-electric transition-colors text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation - Previous & Home */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/part6"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Deployment & Production</p>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className="glass-card p-6 hover:shadow-electric transition-all group bg-gradient-to-r from-atom-primary/10 to-electric/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Completed all sections!</p>
              <p className="font-semibold gradient-text">Return to Home</p>
            </div>
            <Home className="w-5 h-5 text-electric group-hover:scale-110 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
