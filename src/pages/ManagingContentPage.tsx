import { FileEdit, Image, Trash2, Save, Eye, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function ManagingContentPage() {
  const contentTypes = [
    {
      title: 'Pages',
      icon: FileEdit,
      description: 'Static pages like About, Contact, Terms',
      color: 'from-blue-500 to-cyan-500',
      actions: ['Create new pages', 'Edit existing content', 'Manage page settings', 'Set page status']
    },
    {
      title: 'Blog Posts',
      icon: FileEdit,
      description: 'News, announcements, and articles',
      color: 'from-purple-500 to-pink-500',
      actions: ['Write posts', 'Add featured images', 'Schedule publishing', 'Manage categories']
    },
    {
      title: 'Media Library',
      icon: Image,
      description: 'Images, documents, and files',
      color: 'from-green-500 to-teal-500',
      actions: ['Upload files', 'Organize media', 'Edit file details', 'Delete unused files']
    }
  ]

  const editorSteps = [
    {
      step: 'Access Content Editor',
      details: [
        'Navigate to Content → Pages or Posts in admin menu',
        'Click "Add New" button or select existing content',
        'The editor will open with formatting tools'
      ]
    },
    {
      step: 'Write Your Content',
      details: [
        'Enter title in the title field',
        'Write content using the WYSIWYG editor',
        'Format text with toolbar options (bold, italic, lists, etc.)',
        'Add images by clicking the image icon'
      ]
    },
    {
      step: 'Configure Settings',
      details: [
        'Set publication status (Draft, Published, Scheduled)',
        'Choose categories and tags',
        'Set featured image',
        'Configure SEO settings (meta title, description)'
      ]
    },
    {
      step: 'Preview & Publish',
      details: [
        'Click "Preview" to see how content will look',
        'Make any necessary adjustments',
        'Click "Publish" to make content live',
        'Or "Save Draft" to continue editing later'
      ]
    }
  ]

  const bestPractices = [
    {
      title: 'Content Quality',
      tips: [
        'Write clear, concise, and engaging content',
        'Use proper grammar and spelling',
        'Break content into readable paragraphs',
        'Use headings to organize content'
      ]
    },
    {
      title: 'SEO Optimization',
      tips: [
        'Include relevant keywords naturally',
        'Write descriptive meta titles and descriptions',
        'Use descriptive alt text for images',
        'Create SEO-friendly URLs'
      ]
    },
    {
      title: 'Media Management',
      tips: [
        'Optimize images before uploading (compress, resize)',
        'Use descriptive filenames',
        'Keep media library organized',
        'Delete unused files regularly'
      ]
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <h1 className="text-4xl font-bold gradient-text mb-6">Managing Content</h1>
        <p className="text-card-text leading-relaxed mb-4">
          Learn how to create, edit, and manage all types of content on your ATOM Club website. 
          This guide covers pages, blog posts, media management, and content best practices.
        </p>
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <p className="text-card-text text-sm">
            You need admin or editor privileges to manage content. Contact your administrator if you need access.
          </p>
        </div>
      </section>

      {/* Content Types */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Content Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {contentTypes.map((type, idx) => {
            const Icon = type.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} p-3 mb-4 shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{type.title}</h3>
                <p className="text-card-text mb-4 text-sm">{type.description}</p>
                <div className="space-y-2">
                  {type.actions.map((action, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                      <span className="text-card-text text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Creating Content */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Creating and Editing Content</h2>
        <div className="space-y-4">
          {editorSteps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold gradient-text pt-1">{item.step}</h3>
              </div>
              <div className="ml-14 space-y-2">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-card-text">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor Features */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Content Editor Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
              <FileEdit className="w-5 h-5" />
              Text Formatting
            </h3>
            <div className="space-y-2">
              {['Bold, italic, underline', 'Headings (H1-H6)', 'Bullet and numbered lists', 'Block quotes', 'Text alignment', 'Font colors and highlighting'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                  <span className="text-card-text text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
              <Image className="w-5 h-5" />
              Media & Links
            </h3>
            <div className="space-y-2">
              {['Insert images', 'Add videos (embed)', 'Create hyperlinks', 'Insert tables', 'Embed code blocks', 'Add file downloads'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                  <span className="text-card-text text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Content Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Save, label: 'Save Draft', desc: 'Save without publishing', color: 'from-blue-500 to-cyan-500' },
            { icon: Eye, label: 'Preview', desc: 'View before publishing', color: 'from-purple-500 to-pink-500' },
            { icon: CheckCircle2, label: 'Publish', desc: 'Make content live', color: 'from-green-500 to-teal-500' },
            { icon: Trash2, label: 'Delete', desc: 'Remove content', color: 'from-red-500 to-orange-500' }
          ].map((action, idx) => {
            const Icon = action.icon
            return (
              <div key={idx} className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} p-2.5 mb-3 mx-auto shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">{action.label}</h4>
                <p className="text-card-text text-xs">{action.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Content Best Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bestPractices.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 animate-slide-down"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
              <div className="space-y-3">
                {category.tips.map((tip, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-card-text text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
