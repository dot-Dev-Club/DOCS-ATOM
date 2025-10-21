import { Shield, Zap, Target, Users2, GitBranch, AlertTriangle, Edit, Key, Mail, Trash2, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part4_TechnicalLeads() {
  const coreDuties = [
    'Code review and quality assurance',
    'Architecture decisions and planning',
    'Mentoring junior developers',
    'Sprint planning and task allocation',
    'Security and performance monitoring'
  ]

  const keySkills = [
    'Advanced React & TypeScript',
    'Git workflow management',
    'Database design & optimization',
    'API design & documentation',
    'Team communication & leadership'
  ]

  const userRoles = [
    {
      role: 'Administrator',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      permissions: [
        'Full access to all features',
        'Manage all users and roles',
        'Configure system settings',
        'Delete any content',
        'Access security settings'
      ]
    },
    {
      role: 'Editor',
      icon: Edit,
      color: 'from-blue-500 to-cyan-500',
      permissions: [
        'Create and edit all content',
        'Manage events and gallery',
        'Moderate user comments',
        'Access content analytics',
        'Cannot change settings'
      ]
    },
    {
      role: 'Member',
      icon: Users2,
      color: 'from-green-500 to-teal-500',
      permissions: [
        'View member-only content',
        'Register for events',
        'Comment on posts',
        'Update own profile',
        'Limited dashboard access'
      ]
    }
  ]

  const userActions = [
    { action: 'View Profile', icon: Users2, desc: 'View complete user information and activity history' },
    { action: 'Edit User', icon: Edit, desc: 'Modify user details, role, or permissions' },
    { action: 'Reset Password', icon: Key, desc: 'Generate new password or send reset link' },
    { action: 'Send Message', icon: Mail, desc: 'Send email notification to user' },
    { action: 'Suspend User', icon: AlertTriangle, desc: 'Temporarily disable account access' },
    { action: 'Delete User', icon: Trash2, desc: 'Permanently remove user and data' }
  ]

  const reviewChecklist = [
    { item: 'Code Quality', desc: 'Clean, readable, follows conventions' },
    { item: 'Functionality', desc: 'Features work as intended, no bugs' },
    { item: 'Performance', desc: 'No unnecessary re-renders or memory leaks' },
    { item: 'Security', desc: 'No vulnerabilities, proper input validation' },
    { item: 'Tests', desc: 'Adequate test coverage for new features' },
    { item: 'Documentation', desc: 'Code comments and updated docs' }
  ]

  const sprintTasks = [
    'Hold weekly planning meetings every Monday',
    'Break down large features into manageable tasks',
    'Assign tasks based on developer skill levels',
    'Set realistic deadlines with buffer time',
    'Track progress using GitHub Projects or Trello'
  ]

  const emergencySteps = [
    { step: 'Assess Impact', desc: 'Determine severity and affected users' },
    { step: 'Notify Team', desc: 'Alert other technical leads and club leadership' },
    { step: 'Quick Fix', desc: 'Apply hotfix to main branch if possible' },
    { step: 'Rollback', desc: 'Revert to previous stable version if needed' },
    { step: 'Post-Mortem', desc: 'Document incident and prevention measures' }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Shield className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Technical Leads Guide</h1>
            <p className="text-card-text mt-2">Leadership guidelines for tech leads</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Technical leads oversee development, maintenance, and enhancement of the ATOM website. 
          They bridge the gap between developers, content managers, and club leadership.
        </p>
      </section>

      {/* Role Overview */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-2.5 shadow-glow">
            <Target className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Role & Responsibilities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-electric">Core Duties</h3>
            {coreDuties.map((duty, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                <span className="text-card-text text-sm">{duty}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-electric">Key Skills</h3>
            {keySkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                <span className="text-card-text text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles & Permissions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">User Roles & Permissions Management</h2>
        <p className="text-card-text leading-relaxed">
          As a technical lead, you're responsible for managing user access and permissions. 
          The ATOM website uses a role-based access control system:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {userRoles.map((role, idx) => {
            const Icon = role.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} p-3 mb-4 shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">{role.role}</h3>
                <div className="space-y-2">
                  {role.permissions.map((permission, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer mt-2" />
                      <span className="text-card-text text-sm">{permission}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* User Management Actions */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">User Management Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric/50 transition-all"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Icon className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-white">{action.action}</h4>
                </div>
                <p className="text-card-text text-sm ml-8">{action.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Code Review */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Zap className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Code Review Process</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <p className="text-card-text leading-relaxed">
            Every pull request must be reviewed by a technical lead before merging to main. 
            Follow this checklist for comprehensive reviews:
          </p>

          <div className="space-y-3">
            {reviewChecklist.map((check, idx) => (
              <div
                key={idx}
                className="bg-black/40 p-4 rounded-lg border border-white/10 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong className="text-electric">{check.item}:</strong>
                    <span className="text-card-text ml-2">{check.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Git Workflow */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <GitBranch className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Git Workflow</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-electric">Branch Strategy</h3>
          <div className="bg-black/40 p-4 rounded-lg border border-white/10">
            <pre className="text-sm text-gray-200 overflow-x-auto">
{`main              # Production-ready code
├── develop       # Integration branch
├── feature/*     # New features
├── bugfix/*      # Bug fixes
└── hotfix/*      # Critical production fixes`}
            </pre>
          </div>

          <div className="bg-gradient-to-br from-atom-primary/10 to-electric/10 p-4 rounded-lg border border-electric/30 mt-4">
            <h3 className="text-lg font-semibold text-electric mb-2">Commit Convention</h3>
            <pre className="text-sm text-gray-200">
{`feat: Add event registration form
fix: Resolve gallery image loading issue
docs: Update API documentation
style: Format code with Prettier
refactor: Optimize event fetching logic
test: Add unit tests for auth service`}
            </pre>
          </div>
        </div>
      </section>

      {/* Team Management */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-2.5 shadow-glow">
            <Users2 className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Team Management</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-electric">Sprint Planning</h3>
          <div className="space-y-2">
            {sprintTasks.map((task, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                <span className="text-card-text text-sm">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Protocols */}
      <section className="glass-card p-6 border-2 border-red-500/30 bg-red-500/5">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h2 className="text-2xl font-bold text-red-400">Emergency Protocols</h2>
        </div>
        
        <p className="text-card-text leading-relaxed mb-4">
          In case of critical production issues:
        </p>

        <div className="space-y-3">
          {emergencySteps.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <strong className="text-red-400">{item.step}:</strong>
                <span className="text-card-text ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to Next/Previous Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/part3"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Developer Guide</p>
            </div>
          </div>
        </Link>
        <Link
          to="/docs/part5"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Next</p>
              <p className="font-semibold gradient-text">Operations & Maintenance</p>
            </div>
            <ArrowRight className="w-5 h-5 text-electric group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
