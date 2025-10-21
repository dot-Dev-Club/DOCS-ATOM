import { Link, useLocation } from 'react-router-dom'
import { Home, Rocket, Code, Shield, FileEdit, Terminal, Wrench, Star, X, BookOpen } from 'lucide-react'
import { useEffect } from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'from-blue-500 to-cyan-500' },
    // Master Documentation
    { path: '/docs/part1', label: 'Getting Started', icon: Rocket, color: 'from-electric to-atom-primary' },
    { path: '/docs/part2', label: 'Content Management', icon: FileEdit, color: 'from-electric to-atom-primary' },
    { path: '/docs/part3', label: 'Developer Guide', icon: Code, color: 'from-electric to-atom-primary' },
    { path: '/docs/part4', label: 'Technical Leads', icon: Shield, color: 'from-electric to-atom-primary' },
    { path: '/docs/part5', label: 'Operations & Maintenance', icon: Wrench, color: 'from-electric to-atom-primary' },
    { path: '/docs/part6', label: 'Deployment & Production', icon: Terminal, color: 'from-electric to-atom-primary' },
    { path: '/docs/part7', label: 'Reference & Best Practices', icon: Star, color: 'from-electric to-atom-primary' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Backdrop Overlay - Touch Friendly */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-fade-in touch-none"
          onClick={onClose}
          onTouchEnd={onClose}
          role="button"
          aria-label="Close navigation"
          tabIndex={0}
        />
      )}

      {/* Grid Modal - Responsive */}
      <div
        className={`fixed inset-4 sm:inset-8 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
          md:w-[90vw] md:max-w-5xl md:max-h-[85vh] md:inset-auto z-50 
          transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl relative h-full md:max-h-[85vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 pb-4 sm:pb-5 md:pb-6 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-atom-primary to-electric shadow-glow">
                <BookOpen className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">Navigation</h2>
                <p className="text-xs sm:text-sm text-card-text/70 mt-0.5 sm:mt-1 hidden sm:block">Choose a page to explore</p>
              </div>
            </div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 hover:rotate-90 group"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white group-hover:text-electric transition-colors" />
            </button>
          </div>

          {/* Grid Navigation - Dynamic & Responsive */}
          <nav className="overflow-y-auto overflow-x-hidden pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-electric/60 scrollbar-track-transparent hover:scrollbar-thumb-electric/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2 flex-1 -webkit-overflow-scrolling-touch">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 pb-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`group relative p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl transition-all duration-300 
                      active:scale-95 md:hover:scale-105 md:hover:-translate-y-1 ${
                      active
                        ? 'glass-card shadow-glow border-2 border-electric/50'
                        : 'bg-white/5 active:bg-white/20 md:hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {/* Gradient overlay for active */}
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-br from-atom-primary/10 to-electric/10 rounded-lg sm:rounded-xl shimmer" />
                    )}
                    
                    <div className="relative flex flex-col items-center text-center gap-2 sm:gap-2.5 md:gap-3">
                      {/* Icon */}
                      <div className={`p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} transition-all duration-300 ${
                        active ? 'shadow-glow scale-110' : 'group-active:scale-95 md:group-hover:scale-110'
                      }`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      
                      {/* Label */}
                      <span className={`font-semibold text-xs sm:text-sm leading-tight ${
                        active ? 'gradient-text' : 'text-white group-active:text-electric md:group-hover:text-electric'
                      } transition-colors`}>
                        {item.label}
                      </span>
                      
                      {/* Active indicator */}
                      {active && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-electric rounded-full animate-pulse-glow shadow-glow" />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
