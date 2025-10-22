import { Code2, Layers, Palette, Terminal, Zap, Sparkles, Smartphone, Lock, Image, Calendar, Users, Accessibility, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Part3_DeveloperGuide() {
  const frontendTech = [
    'React 18 - UI Framework',
    'TypeScript - Type Safety',
    'Vite - Build Tool',
    'Tailwind CSS - Styling',
    'Lucide React - Icons'
  ]

  const backendTech = [
    'Node.js - Runtime',
    'Express - API Framework',
    'MongoDB - Database',
    'Cloudinary - Image Hosting',
    'JWT - Authentication'
  ]

  const colorClasses = [
    { class: '.gradient-text', desc: 'Electric blue gradient text' },
    { class: '.glass-card', desc: 'Glassmorphism card effect' },
    { class: '.shadow-glow', desc: 'Electric blue glow shadow' },
    { class: 'text-electric', desc: 'Cyan accent color' }
  ]

  const keyFeatures = [
    { icon: Sparkles, text: 'Modern, animated, and branded UI' },
    { icon: Smartphone, text: 'Fully responsive layout for mobile and desktop' },
    { icon: Lock, text: 'Secure admin authentication panel' },
    { icon: Image, text: 'Integrated gallery with upload and preview' },
    { icon: Calendar, text: 'Event creation and scheduling system' },
    { icon: Users, text: 'Member and sub-club management' },
    { icon: Zap, text: 'Optimized performance with Vite + React' },
    { icon: Accessibility, text: 'Accessibility and responsive compliance' }
  ]

  const platformCapabilities = [
    'Club activities and achievements',
    'Events and registrations',
    'Coordinators and team members',
    'Sub-clubs and their details',
    'Photo galleries and media archives'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Code2 className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Developer Guide</h1>
            <p className="text-card-text mt-2">Technical documentation for developers</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          This guide provides technical documentation for developers working on the ATOM website codebase, 
          including architecture, workflows, and best practices.
        </p>
      </section>

      {/* Platform Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Platform Overview</h2>
        <div className="glass-card p-6">
          <p className="text-card-text leading-relaxed mb-4">
            The ATOM Club Website is a fully featured, modern web platform that acts as the digital hub
            for the ATOM Club at Karunya Institute of Technology and Sciences.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Platform Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {platformCapabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-atom-primary to-electric shimmer" />
                  <span className="text-card-text">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Key Technical Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/50 transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-atom-primary to-electric p-2 flex-shrink-0 shadow-glow">
                  <Icon className="w-full h-full text-white" />
                </div>
                <span className="text-card-text font-medium">{feature.text}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-glow">
            <Layers className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Technology Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold gradient-text">Frontend</h3>
            <div className="space-y-2">
              {frontendTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 animate-slide-down"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-electric shimmer" />
                  <span className="text-card-text text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold gradient-text">Backend</h3>
            <div className="space-y-2">
              {backendTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 animate-slide-down"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-electric shimmer" />
                  <span className="text-card-text text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 shadow-glow">
            <Terminal className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Project Structure</h2>
        </div>

        <div className="glass-card p-6">
          <div className="bg-black/40 p-5 rounded-lg border border-white/10">
            <pre className="text-sm text-gray-200 overflow-x-auto">
{`atom-website/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── contexts/        # React Context providers
│   ├── api/             # API service layer
│   └── types/           # TypeScript definitions
├── public/              # Static assets
├── server/              # Backend code
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth & validation
│   └── controllers/     # Business logic
└── config/              # Configuration files`}
            </pre>
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-2.5 shadow-glow">
            <Zap className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Development Workflow</h2>
        </div>

        <div className="glass-card p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Creating a New Component</h3>
            <div className="bg-black/40 p-4 rounded-lg border border-white/10">
              <pre className="text-sm text-gray-200 overflow-x-auto">
{`// src/components/MyComponent.tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
}

export const MyComponent: FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-2xl gradient-text">{title}</h2>
      {description && <p className="text-card-text">{description}</p>}
    </div>
  );
};`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Using the Component</h3>
            <div className="bg-black/40 p-4 rounded-lg border border-white/10">
              <pre className="text-sm text-gray-200 overflow-x-auto">
{`import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <MyComponent 
      title="Hello ATOM" 
      description="Welcome to the club!"
    />
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Guidelines */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-2.5 shadow-glow">
            <Palette className="w-full h-full text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Styling Guidelines</h2>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-electric">Color Classes</h3>
          <div className="space-y-3">
            {colorClasses.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <code className="px-3 py-1 bg-black/60 rounded text-electric text-sm font-mono">
                  {item.class}
                </code>
                <span className="text-card-text text-sm mt-1">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-atom-primary/10 to-electric/10 p-4 rounded-lg border border-electric/30 mt-6">
            <p className="text-sm text-card-text">
              <strong className="text-electric">🎨 Design System:</strong> Always use the predefined Tailwind classes 
              and custom utilities. Avoid inline styles to maintain consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="glass-card p-6 border-2 border-electric/30">
        <h2 className="text-2xl font-bold gradient-text mb-4">🧪 Testing</h2>
        <p className="text-card-text leading-relaxed mb-4">
          Before committing code, ensure you run the test suite and verify all components render correctly 
          across different screen sizes.
        </p>
        <div className="bg-black/40 p-4 rounded-lg border border-white/10">
          <pre className="text-sm text-gray-200 overflow-x-auto">
{`npm run test          # Run test suite
npm run lint          # Check code quality
npm run build         # Test production build`}
          </pre>
        </div>
      </section>

      {/* Navigation to Next/Previous Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <Link
          to="/docs/content-management"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 text-electric group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-card-text/70">Previous</p>
              <p className="font-semibold gradient-text">Content Management</p>
            </div>
          </div>
        </Link>
        <Link
          to="/docs/technical-leads"
          className="glass-card p-6 hover:shadow-electric transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-card-text/70">Next</p>
              <p className="font-semibold gradient-text">Technical Leads</p>
            </div>
            <ArrowRight className="w-5 h-5 text-electric group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
}
