import { AlertTriangle, Wrench, CheckCircle2, XCircle, RefreshCw } from 'lucide-react'

export default function TroubleshootingPage() {
  const commonIssues = [
    {
      issue: 'Cannot Login to Admin Panel',
      symptoms: ['Invalid credentials error', 'Login page keeps refreshing'],
      solutions: [
        'Verify username and password are correct (default: admin/admin123)',
        'Clear browser cookies and cache',
        'Reset password from database if necessary',
        'Check if user account is active in database'
      ]
    },
    {
      issue: 'Images Not Uploading',
      symptoms: ['Upload fails silently', 'File size error', 'Format not supported error'],
      solutions: [
        'Check image file size (must be under 5MB)',
        'Verify file format is JPG, PNG, or GIF',
        'Ensure uploads directory has write permissions (chmod 755)',
        'Check PHP upload_max_filesize in php.ini',
        'Verify disk space is available on server'
      ]
    },
    {
      issue: 'Website Running Slow',
      symptoms: ['Pages take long to load', 'Database queries timeout'],
      solutions: [
        'Enable caching in admin settings',
        'Optimize database queries',
        'Compress and optimize images',
        'Enable CDN for static assets',
        'Check server resource usage (CPU, RAM)',
        'Clear application cache'
      ]
    },
    {
      issue: 'Events Not Showing on Homepage',
      symptoms: ['Event created but not visible', 'Only old events showing'],
      solutions: [
        'Check event status is set to "Published"',
        'Verify event date is in the future',
        'Clear browser cache and refresh page',
        'Check homepage event display settings',
        'Ensure event category is not filtered out'
      ]
    },
    {
      issue: 'Email Notifications Not Sending',
      symptoms: ['No registration confirmation emails', 'Password reset emails not received'],
      solutions: [
        'Verify SMTP settings in admin panel',
        'Test email configuration with test message',
        'Check spam folder for emails',
        'Ensure email server is running',
        'Verify sender email is whitelisted',
        'Check email logs for error messages'
      ]
    },
    {
      issue: 'Database Connection Error',
      symptoms: ['Error establishing database connection', '500 Internal Server Error'],
      solutions: [
        'Check database credentials in .env file',
        'Verify MySQL service is running',
        'Ensure database name exists',
        'Check database user has proper permissions',
        'Test connection using mysql command line',
        'Review database error logs'
      ]
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Wrench className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Troubleshooting</h1>
            <p className="text-card-text mt-2">Solutions to common issues</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          This guide helps you identify and resolve common issues you may encounter while using the ATOM Club website.
        </p>
      </section>

      {/* Common Issues */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Common Issues & Solutions</h2>
        <div className="space-y-6">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-3 shadow-glow flex-shrink-0">
                  <AlertTriangle className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold gradient-text mb-3">{item.issue}</h3>
                  
                  {/* Symptoms */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-orange-400 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Symptoms
                    </h4>
                    <div className="space-y-1 ml-7">
                      {item.symptoms.map((symptom, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                          <span className="text-card-text text-sm">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Solutions
                    </h4>
                    <div className="space-y-2 ml-7">
                      {item.solutions.map((solution, solIdx) => (
                        <div key={solIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-green-500/20">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                            {solIdx + 1}
                          </div>
                          <span className="text-card-text text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Error Codes */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Common Error Codes</h2>
        <div className="space-y-3">
          {[
            { code: '404 Not Found', meaning: 'Page or resource does not exist', fix: 'Check URL spelling, verify page exists in admin panel' },
            { code: '500 Internal Server Error', meaning: 'Server-side error occurred', fix: 'Check error logs, verify database connection, review recent code changes' },
            { code: '403 Forbidden', meaning: 'Access to resource is denied', fix: 'Check file permissions, verify user has required role/permissions' },
            { code: '401 Unauthorized', meaning: 'Authentication required', fix: 'Login to admin panel, verify session is active' },
            { code: 'Database Connection Failed', meaning: 'Cannot connect to MySQL database', fix: 'Check database credentials, ensure MySQL is running' }
          ].map((error, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/5 border border-red-500/30">
              <div className="flex items-start justify-between gap-4 mb-2">
                <code className="px-3 py-1 rounded bg-red-500/20 text-red-400 font-bold text-sm">{error.code}</code>
                <span className="text-card-text text-sm flex-1">{error.meaning}</span>
              </div>
              <div className="ml-2 mt-2 p-3 rounded bg-white/5 border-l-2 border-green-500">
                <span className="text-green-400 text-sm font-semibold">Fix: </span>
                <span className="text-card-text text-sm">{error.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostic Tools */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Diagnostic Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tool: 'Error Logs',
              icon: AlertTriangle,
              desc: 'Check server error logs for detailed error messages',
              location: '/var/log/apache2/error.log'
            },
            {
              tool: 'PHP Info',
              icon: RefreshCw,
              desc: 'View PHP configuration and loaded modules',
              location: 'Create phpinfo.php file'
            },
            {
              tool: 'Database Status',
              icon: CheckCircle2,
              desc: 'Check database connection and table status',
              location: 'Admin → System Status'
            }
          ].map((tool, idx) => {
            const Icon = tool.icon
            return (
              <div key={idx} className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 shadow-glow">
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{tool.tool}</h3>
                <p className="text-card-text text-sm mb-3">{tool.desc}</p>
                <code className="text-electric text-xs bg-white/5 px-2 py-1 rounded block">{tool.location}</code>
              </div>
            )
          })}
        </div>
      </section>

      {/* Getting Help */}
      <section className="glass-card p-6 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Still Need Help?</h3>
            <div className="space-y-3">
              <p className="text-card-text">If you cannot resolve the issue using this guide:</p>
              <div className="space-y-2">
                {[
                  'Contact your system administrator with error details',
                  'Check the official documentation for updates',
                  'Search community forums for similar issues',
                  'Collect error logs before seeking support',
                  'Note the steps that reproduce the problem'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-card-text text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
