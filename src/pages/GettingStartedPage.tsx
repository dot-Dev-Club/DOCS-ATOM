import { Link } from 'react-router-dom'
import { Download, Server, Key, AlertCircle, CheckCircle, Rocket, ExternalLink, Code } from 'lucide-react'

export default function GettingStartedPage() {
  const steps = [
    {
      number: '01',
      title: 'System Requirements',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      requirements: [
        { label: 'PHP', value: 'Version 7.4 or higher' },
        { label: 'MySQL', value: 'Version 5.7 or higher' },
        { label: 'Web Server', value: 'Apache 2.4+ or Nginx' },
        { label: 'PHP Extensions', value: 'mbstring, mysqli, pdo, gd, curl' }
      ]
    },
    {
      number: '02',
      title: 'Installation Steps',
      icon: Download,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Download the website files from the provided source',
        'Extract the ZIP file to your web server directory (htdocs/public_html)',
        'Create a new MySQL database for the website',
        'Import the provided SQL file into your database',
        'Update the config.php file with your database credentials',
        'Set proper file permissions (755 for directories, 644 for files)',
        'Access your website URL in a web browser'
      ]
    },
    {
      number: '03',
      title: 'Admin Access',
      icon: Key,
      color: 'from-green-500 to-teal-500',
      credentials: {
        username: 'admin',
        password: 'admin123',
        url: 'yourwebsite.com/admin'
      }
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="glass-card p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-atom-primary/10 via-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-electric animate-pulse-glow" />
            <h1 className="text-5xl font-bold gradient-text">Getting Started</h1>
          </div>
          <p className="text-xl text-metallic-text mt-4 leading-relaxed">
            Follow this comprehensive guide to install and configure the ATOM Club website on your server.
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <div className="glass-card p-6 border-l-4 border-electric bg-gradient-to-r from-electric/10 to-transparent">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-electric flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-electric">Important Notice</h3>
            <p className="text-card-text">
              Before proceeding with the installation, ensure you have administrative access to your web server 
              and a basic understanding of PHP and MySQL. If you're unsure about any step, consult with your 
              hosting provider or system administrator.
            </p>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <section key={index} className="space-y-6 animate-slide-down" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-3 shadow-glow`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <div>
                <div className="text-sm text-metallic-text font-mono">{step.number}</div>
                <h2 className="text-3xl font-bold gradient-text">{step.title}</h2>
              </div>
            </div>

            {step.requirements && (
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-atom-primary" />
                  <span className="gradient-text">Required Software</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.requirements.map((req, idx) => (
                    <div key={idx} className="glass-card p-4 hover:shadow-electric transition-shadow">
                      <div className="text-sm text-metallic-text mb-1">{req.label}</div>
                      <div className="font-semibold text-card-text">{req.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step.steps && (
              <div className="glass-card p-6">
                <ol className="space-y-4">
                  {step.steps.map((stepText, idx) => (
                    <li key={idx} className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-card-text leading-relaxed">{stepText}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {step.credentials && (
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Key className="w-5 h-5 text-atom-primary" />
                  <span className="gradient-text">Default Login Credentials</span>
                </h3>
                
                <div className="glass-card p-4 bg-gradient-to-r from-atom-primary/5 to-electric/5 border border-electric/20">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-metallic-text">Username:</span>
                      <code className="px-3 py-1 rounded bg-background/50 text-electric font-mono">{step.credentials.username}</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-metallic-text">Password:</span>
                      <code className="px-3 py-1 rounded bg-background/50 text-electric font-mono">{step.credentials.password}</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-metallic-text">Admin URL:</span>
                      <code className="px-3 py-1 rounded bg-background/50 text-electric font-mono flex items-center gap-2">
                        {step.credentials.url}
                        <ExternalLink className="w-4 h-4" />
                      </code>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4 border-l-4 border-yellow-500 bg-yellow-500/5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-card-text">
                      <strong className="text-yellow-500">Security Warning:</strong> Make sure to change these default 
                      credentials immediately after your first login to protect your website from unauthorized access.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )
      })}

      {/* Configuration File Example */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
          <Code className="w-8 h-8 text-atom-primary" />
          Database Configuration
        </h2>
        <div className="glass-card p-6">
          <p className="text-card-text mb-4">
            Update your <code className="px-2 py-1 rounded bg-electric/10 text-electric">config.php</code> file with your database credentials:
          </p>
          <div className="bg-background/80 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">
{`<?php
// Database Configuration
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'your_database_username');
define('DB_PASSWORD', 'your_database_password');
define('DB_NAME', 'your_database_name');

// Attempt to connect to MySQL database
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Post-Installation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Post-Installation Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Change Admin Password',
              description: 'Navigate to Admin Panel > Profile and update your password to a strong, unique one.',
              icon: Key,
              color: 'text-red-500'
            },
            {
              title: 'Configure Website Settings',
              description: 'Set your club name, contact information, and website preferences in Settings.',
              icon: Server,
              color: 'text-blue-500'
            },
            {
              title: 'Test All Features',
              description: 'Verify that all pages, forms, and features are working correctly.',
              icon: CheckCircle,
              color: 'text-green-500'
            },
            {
              title: 'Remove Installation Files',
              description: 'Delete the install folder and any temporary setup files for security.',
              icon: AlertCircle,
              color: 'text-orange-500'
            }
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="glass-card p-6 group hover:shadow-electric transition-all duration-300">
                <Icon className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold mb-2 gradient-text">{item.title}</h3>
                <p className="text-card-text text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Next Steps CTA */}
      <div className="glass-card p-8 bg-gradient-to-r from-electric/10 via-atom-primary/10 to-electric/10 border-2 border-electric/30 relative overflow-hidden group">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Rocket className="w-6 h-6 text-electric animate-pulse-glow" />
            <span className="gradient-text">You're All Set!</span>
          </h3>
          <p className="text-lg text-metallic-text mb-6">
            Your ATOM Club website is now installed and ready to use. Continue to learn about understanding the website structure.
          </p>
          <Link
            to="/understanding"
            className="metallic-button inline-flex items-center gap-2 group/btn"
          >
            <span>Understanding the Website</span>
            <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
