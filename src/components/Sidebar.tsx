import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Rocket, Code, Layout, Shield, FileEdit, Users, Calendar, Image, Palette, Terminal, Wrench, Star, HelpCircle, X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { path: '/introduction', label: 'Introduction', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { path: '/getting-started', label: 'Getting Started', icon: Rocket, color: 'from-green-500 to-teal-500' },
    { path: '/understanding', label: 'Understanding', icon: Code, color: 'from-orange-500 to-red-500' },
    { path: '/navigating', label: 'Navigating', icon: Layout, color: 'from-blue-500 to-purple-500' },
    { path: '/admin-panel', label: 'Admin Panel', icon: Shield, color: 'from-red-500 to-pink-500' },
    { path: '/managing-content', label: 'Managing Content', icon: FileEdit, color: 'from-cyan-500 to-blue-500' },
    { path: '/user-management', label: 'User Management', icon: Users, color: 'from-purple-500 to-indigo-500' },
    { path: '/events', label: 'Events', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { path: '/gallery', label: 'Gallery', icon: Image, color: 'from-pink-500 to-rose-500' },
    { path: '/customization', label: 'Customization', icon: Palette, color: 'from-yellow-500 to-orange-500' },
    { path: '/development', label: 'Development', icon: Terminal, color: 'from-gray-500 to-slate-500' },
    { path: '/troubleshooting', label: 'Troubleshooting', icon: Wrench, color: 'from-red-500 to-orange-500' },
    { path: '/best-practices', label: 'Best Practices', icon: Star, color: 'from-yellow-500 to-amber-500' },
    { path: '/faq', label: 'FAQ', icon: HelpCircle, color: 'from-blue-500 to-cyan-500' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full glass-card m-4 p-6 flex flex-col">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 mt-8 lg:mt-0">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative ${
                    active
                      ? 'glass-card shadow-glow'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} ${active ? 'shadow-glow' : ''}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`font-medium ${active ? 'gradient-text' : 'text-card-text'}`}>
                    {item.label}
                  </span>
                  {active && (
                    <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-atom-primary to-electric rounded-r shimmer" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
