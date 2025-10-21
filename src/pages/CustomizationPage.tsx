import { Palette, Settings, Code, Eye } from 'lucide-react'

export default function CustomizationPage() {
  return (
    <div className="space-y-12">
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Palette className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Customization</h1>
            <p className="text-card-text mt-2">Personalize your website appearance</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Customize the look and feel of your ATOM Club website to match your club's branding and preferences.
        </p>
      </section>

      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Theme Settings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { setting: 'Primary Color', desc: 'Main brand color used throughout the site', example: '#0B63FF' },
            { setting: 'Secondary Color', desc: 'Accent color for buttons and highlights', example: '#C0C6C9' },
            { setting: 'Logo Image', desc: 'Upload club logo (PNG, SVG recommended)', example: 'atom-logo.png' },
            { setting: 'Favicon', desc: 'Small icon displayed in browser tab', example: '32x32px' },
            { setting: 'Background Style', desc: 'Choose solid, gradient, or image background', example: 'Gradient' },
            { setting: 'Font Family', desc: 'Main font used for text content', example: 'Inter, Roboto' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-2">{item.setting}</h4>
              <p className="text-card-text text-sm mb-2">{item.desc}</p>
              <code className="text-electric text-xs bg-white/5 px-2 py-1 rounded">{item.example}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Customization Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Header', items: ['Logo placement', 'Navigation menu', 'Header color', 'Search bar'] },
            { title: 'Footer', items: ['Footer text', 'Social media links', 'Contact info', 'Copyright notice'] },
            { title: 'Homepage', items: ['Hero section', 'Featured events', 'Quick links', 'Latest news'] }
          ].map((area, idx) => (
            <div key={idx} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 gradient-text">{area.title}</h3>
              <div className="space-y-2">
                {area.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-electric" />
                    <span className="text-card-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Advanced Customization</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-electric" />
              <h3 className="text-xl font-semibold gradient-text">Custom CSS</h3>
            </div>
            <p className="text-card-text mb-4">Add custom CSS code to override default styles:</p>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10 font-mono text-sm">
              <code className="text-green-400">/* Custom CSS Example */</code><br/>
              <code className="text-blue-400">.header</code> {'{'}<br/>
              <code className="text-purple-400">  background-color: #0B63FF;</code><br/>
              <code className="text-purple-400">  padding: 20px;</code><br/>
              {'}'}
            </div>
          </div>
          <div className="p-6 rounded-lg bg-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-electric" />
              <h3 className="text-xl font-semibold gradient-text">Preview Changes</h3>
            </div>
            <p className="text-card-text">Always preview your changes before publishing to ensure everything looks correct.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
