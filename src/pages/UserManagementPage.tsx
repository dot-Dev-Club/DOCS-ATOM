import { UserPlus, Users, Shield, Key, Trash2, Edit, Mail, AlertTriangle } from 'lucide-react'

export default function UserManagementPage() {
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
      icon: Users,
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

  const addUserSteps = [
    {
      title: 'Navigate to Users',
      description: 'Go to admin panel and click on "Users" in the sidebar menu'
    },
    {
      title: 'Click Add New User',
      description: 'Click the "Add New User" button at the top of the users list'
    },
    {
      title: 'Fill User Details',
      description: 'Enter username, email, password, and full name in the form'
    },
    {
      title: 'Assign Role',
      description: 'Select appropriate role from the dropdown (Admin, Editor, or Member)'
    },
    {
      title: 'Set Status',
      description: 'Choose whether the account is active or inactive'
    },
    {
      title: 'Save User',
      description: 'Click "Create User" button to save. User will receive email notification'
    }
  ]

  const userActions = [
    {
      action: 'View Profile',
      icon: Users,
      description: 'View complete user information and activity history'
    },
    {
      action: 'Edit User',
      icon: Edit,
      description: 'Modify user details, role, or permissions'
    },
    {
      action: 'Reset Password',
      icon: Key,
      description: 'Generate new password or send reset link to user'
    },
    {
      action: 'Send Message',
      icon: Mail,
      description: 'Send email notification or message to user'
    },
    {
      action: 'Suspend User',
      icon: AlertTriangle,
      description: 'Temporarily disable user account access'
    },
    {
      action: 'Delete User',
      icon: Trash2,
      description: 'Permanently remove user and all their data'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Users className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">User Management</h1>
            <p className="text-card-text mt-2">Manage users, roles, and permissions</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          The user management system allows administrators to create, edit, and manage user accounts, 
          assign roles, and control access permissions throughout the website.
        </p>
      </section>

      {/* User Roles */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">User Roles & Permissions</h2>
        <p className="text-card-text leading-relaxed">
          The ATOM Club website uses a role-based access control system with three main user roles:
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

      {/* Adding Users */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Adding New Users</h2>
        <div className="space-y-4">
          {addUserSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{step.title}</h3>
                  <p className="text-card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Form Fields */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">User Form Fields</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { field: 'Username', req: 'Required', desc: 'Unique identifier for login (3-20 characters)' },
            { field: 'Email Address', req: 'Required', desc: 'Valid email for notifications and password reset' },
            { field: 'Password', req: 'Required', desc: 'Minimum 8 characters, mix of letters and numbers' },
            { field: 'Full Name', req: 'Required', desc: 'First and last name of the user' },
            { field: 'Role', req: 'Required', desc: 'Select from Administrator, Editor, or Member' },
            { field: 'Status', req: 'Required', desc: 'Active (can login) or Inactive (blocked)' },
            { field: 'Phone Number', req: 'Optional', desc: 'Contact phone number' },
            { field: 'Profile Photo', req: 'Optional', desc: 'Upload user avatar image' }
          ].map((field, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{field.field}</h4>
                <span className={`px-2 py-1 rounded text-xs ${field.req === 'Required' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {field.req}
                </span>
              </div>
              <p className="text-card-text text-sm">{field.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Actions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Managing Existing Users</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <div
                key={idx}
                className="glass-card p-5 group hover:shadow-electric transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-atom-primary to-electric p-2 shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-semibold gradient-text">{action.action}</h3>
                </div>
                <p className="text-card-text text-sm">{action.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* User List Features */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">User List Features</h2>
        <div className="space-y-4">
          {[
            { feature: 'Search Users', desc: 'Find users by name, username, or email' },
            { feature: 'Filter by Role', desc: 'Show only admins, editors, or members' },
            { feature: 'Filter by Status', desc: 'View active or inactive accounts' },
            { feature: 'Sort Options', desc: 'Sort by name, date joined, or last activity' },
            { feature: 'Bulk Actions', desc: 'Select multiple users for bulk operations' },
            { feature: 'Export Users', desc: 'Download user list as CSV or Excel file' },
            { feature: 'Activity Log', desc: 'View user login history and actions' },
            { feature: 'Statistics', desc: 'View total users, active users, and growth metrics' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <UserPlus className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">{item.feature}</h4>
                <p className="text-card-text text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Tips */}
      <section className="glass-card p-6 border-l-4 border-orange-500">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-400">User Management Security Tips</h3>
            <div className="space-y-2">
              {[
                'Only grant administrator role to trusted individuals',
                'Regularly review user list and remove inactive accounts',
                'Enforce strong password requirements',
                'Monitor user activity logs for suspicious behavior',
                'Use email verification for new user registrations',
                'Immediately suspend accounts showing unusual activity'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                  <span className="text-card-text">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
