import { Wrench, Database, Shield, LineChart, Clock, AlertTriangle, XCircle, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part5_OperationsMaintenance() {
  const dailyTasks = [
    'Check website accessibility and load times',
    'Review error logs from the previous day',
    'Verify scheduled tasks ran successfully',
    'Check server resources (CPU, memory, disk)'
  ]

  const weeklyTasks = [
    'Update dependencies (npm update)',
    'Run security audit (npm audit)',
    'Database backup verification',
    'Review analytics and user feedback'
  ]

  const backupStrategy = [
    { label: 'Daily Backups', value: 'Automated at 2 AM UTC' },
    { label: 'Retention Policy', value: 'Keep 30 daily, 12 monthly backups' },
    { label: 'Storage', value: 'Store backups in cloud (AWS S3 / Google Cloud)' }
  ]

  const securityChecklist = [
    'Verify SSL certificate expiration (renew 30 days before)',
    'Run weekly security scans',
    'Review access logs for suspicious activity',
    'Rotate API keys quarterly',
    'Audit user permissions monthly'
  ]

  const performanceAreas = [
    { title: 'Frontend', items: ['Lazy load images and components', 'Minify CSS and JavaScript', 'Use CDN for static assets', 'Enable browser caching', 'Compress images (WebP format)'] },
    { title: 'Backend', items: ['Database query optimization', 'Implement Redis caching', 'API response compression', 'Connection pooling', 'Load balancing setup'] }
  ]

  const commonIssues = [
    {
      issue: 'Cannot Login to Admin Panel',
      symptoms: ['Invalid credentials error', 'Login page keeps refreshing'],
      quickFix: 'Clear browser cookies and verify credentials (default: admin/admin123)'
    },
    {
      issue: 'Images Not Uploading',
      symptoms: ['Upload fails silently', 'File size error'],
      quickFix: 'Check image is under 5MB and format is JPG/PNG/GIF'
    },
    {
      issue: 'Website Running Slow',
      symptoms: ['Pages take long to load', 'Database queries timeout'],
      quickFix: 'Enable caching, compress images, check server resources'
    },
    {
      issue: 'Events Not Showing',
      symptoms: ['Event created but not visible'],
      quickFix: 'Check event status is "Published" and date is in future'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Wrench className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Operations & Maintenance</h1>
            <p className="text-card-text mt-2">Maintaining and monitoring the production site</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Guidelines for maintaining, monitoring, and optimizing the ATOM website in production environments.
        </p>
      </section>

      {/* Daily Operations */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Clock className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Daily Operations Checklist</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-electric">Morning Routine</h3>
            {dailyTasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span className="text-card-text text-sm">{task}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-electric">Weekly Tasks</h3>
            {weeklyTasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span className="text-card-text text-sm">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Maintenance */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <Database className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Database Maintenance</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Regular database maintenance ensures optimal performance and data integrity.
          </p>

          <div className="bg-black/40 p-5 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-electric mb-4">Backup Strategy</h3>
            <div className="space-y-3">
              {backupStrategy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-electric">{item.label}:</strong>
                    <span className="text-card-text ml-2">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-atom-primary/10 to-electric/10 p-4 rounded-lg border border-electric/30">
            <h3 className="text-lg font-semibold text-electric mb-2">Restore Procedure</h3>
            <pre className="text-sm text-gray-200 mt-2">
{`# List available backups
aws s3 ls s3://atom-backups/

# Download backup
aws s3 cp s3://atom-backups/db-2024-10-21.gz .

# Restore to database
mongorestore --gzip --archive=db-2024-10-21.gz`}
            </pre>
          </div>
        </div>
      </section>

      {/* Security Maintenance */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-2.5 shadow-glow">
            <Shield className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Security Maintenance</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-electric">Security Checklist</h3>
          {securityChecklist.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
              <span className="text-card-text text-sm">{item}</span>
            </div>
          ))}

          <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-red-400 mb-2">⚠️ Security Incidents</h3>
            <p className="text-sm text-card-text">
              If you detect suspicious activity or a security breach, immediately change all admin passwords, 
              revoke API keys, review access logs, notify technical leads, and document the incident.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-2.5 shadow-glow">
            <LineChart className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Performance Optimization</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {performanceAreas.map((area, idx) => (
            <div
              key={idx}
              className="glass-card p-6 space-y-3 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-electric">{area.title}</h3>
              {area.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0" />
                  <span className="text-card-text text-sm">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Common Issues & Quick Fixes */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">🚨 Common Issues & Quick Fixes</h2>
        <p className="text-card-text leading-relaxed">
          Quick reference for resolving frequent issues during maintenance:
        </p>
        <div className="space-y-4">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-3 shadow-glow flex-shrink-0">
                  <AlertTriangle className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.issue}</h3>
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Symptoms
                    </h4>
                    <div className="space-y-1 ml-6">
                      {item.symptoms.map((symptom, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                          <span className="text-card-text text-sm">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Quick Fix
                    </h4>
                    <p className="text-card-text text-sm">{item.quickFix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scheduled Maintenance */}
      <section className="glass-card p-8 border-2 border-electric/30">
        <h2 className="text-2xl font-bold gradient-text mb-6">🕒 Scheduled Maintenance</h2>
        <p className="text-card-text leading-relaxed mb-4">
          For major updates or infrastructure changes, schedule maintenance windows during low traffic periods 
          (Tuesday/Wednesday, 2-4 AM). Announce 48 hours in advance, take full backup, have rollback plan ready, 
          and verify all functionality post-maintenance.
        </p>
      </section>

      {/* Navigation to Next/Previous Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/technical-leads"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Technical Leads</p>
            </div>
          </div>
        </Link>
        <Link
          to="/docs/deployment-production"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Next</p>
              <p className="font-semibold gradient-text">Deployment & Production</p>
            </div>
            <ArrowRight className="w-5 h-5 text-electric group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
