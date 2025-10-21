import { Code, GitBranch, Database, Terminal, FileCode, AlertCircle } from 'lucide-react'

export default function DevelopmentPage() {
  return (
    <div className="space-y-12">
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Code className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Development Guide</h1>
            <p className="text-card-text mt-2">For developers customizing the platform</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          This guide is for developers who want to customize, extend, or contribute to the ATOM Club website codebase.
        </p>
      </section>

      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tech: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'] },
            { tech: 'Backend', items: ['PHP 7.4+', 'MySQL 5.7+', 'Apache/Nginx', 'REST API'] },
            { tech: 'Tools', items: ['Git', 'Composer', 'npm/yarn', 'VS Code'] }
          ].map((stack, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">{stack.tech}</h3>
              <div className="space-y-2">
                {stack.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric shimmer" />
                    <span className="text-card-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Project Structure</h2>
        <div className="glass-card p-6">
          <div className="bg-black/30 p-6 rounded-lg border border-white/10 font-mono text-sm">
            <div className="space-y-1">
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-blue-400">/public</span> - Public assets (CSS, JS, images)</div>
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-blue-400">/src</span> - Application source code</div>
              <div className="ml-6"><span className="text-purple-400">/controllers</span> - Request handlers</div>
              <div className="ml-6"><span className="text-purple-400">/models</span> - Database models</div>
              <div className="ml-6"><span className="text-purple-400">/views</span> - Template files</div>
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-blue-400">/config</span> - Configuration files</div>
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-blue-400">/database</span> - Database migrations</div>
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-green-400">composer.json</span> - PHP dependencies</div>
              <div><FileCode className="w-4 h-4 inline text-electric mr-2" /><span className="text-green-400">.env</span> - Environment variables</div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Development Setup</h2>
        <div className="space-y-4">
          {[
            { step: 'Clone Repository', command: 'git clone https://github.com/atomclub/website.git' },
            { step: 'Install Dependencies', command: 'composer install && npm install' },
            { step: 'Configure Environment', command: 'cp .env.example .env' },
            { step: 'Generate App Key', command: 'php artisan key:generate' },
            { step: 'Run Migrations', command: 'php artisan migrate' },
            { step: 'Start Dev Server', command: 'php artisan serve' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-white">{item.step}</h4>
              </div>
              <div className="ml-11 bg-black/30 px-4 py-2 rounded border border-electric/30">
                <code className="text-green-400 text-sm">{item.command}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">API Endpoints</h2>
        <div className="glass-card p-8">
          <div className="space-y-3">
            {[
              { method: 'GET', endpoint: '/api/events', desc: 'Fetch all events' },
              { method: 'POST', endpoint: '/api/events', desc: 'Create new event' },
              { method: 'GET', endpoint: '/api/users', desc: 'Fetch all users' },
              { method: 'POST', endpoint: '/api/auth/login', desc: 'User authentication' },
              { method: 'GET', endpoint: '/api/gallery/:id', desc: 'Fetch album images' }
            ].map((api, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded font-bold text-xs ${api.method === 'GET' ? 'bg-blue-500/30 text-blue-400' : 'bg-green-500/30 text-green-400'}`}>
                    {api.method}
                  </span>
                  <code className="text-electric">{api.endpoint}</code>
                </div>
                <span className="text-card-text text-sm">{api.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-card p-6 border-l-4 border-yellow-500">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Development Best Practices</h3>
            <div className="space-y-2">
              {[
                'Always work on a feature branch, never directly on main',
                'Write meaningful commit messages',
                'Test changes locally before pushing',
                'Follow PSR coding standards for PHP',
                'Document new features and API endpoints',
                'Keep dependencies up to date',
                'Use environment variables for sensitive data'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-card-text text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
