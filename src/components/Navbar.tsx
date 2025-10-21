import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, Sparkles, Zap } from 'lucide-react'

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-electric animate-pulse-glow" />
                <Zap className="w-4 h-4 text-atom-primary absolute -bottom-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold gradient-text">ATOM Club Docs</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 glass-card px-4 py-2 rounded-xl max-w-md flex-1 mx-8">
            <Search className="w-5 h-5 text-metallic-text" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-transparent border-none outline-none flex-1 text-white placeholder-metallic-text"
            />
            <kbd className="hidden sm:inline-block px-2 py-1 text-xs rounded bg-white/10 text-metallic-text">
              Ctrl K
            </kbd>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
