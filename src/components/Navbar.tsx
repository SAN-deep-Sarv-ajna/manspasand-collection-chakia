import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white border-b border-brand-border">
      {/* Top Bar */}
      <div className="bg-brand-black text-brand-white py-2 text-[10px] uppercase font-medium tracking-widest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1">
          <p className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            Motihari Road, Chakia, Bihar 845412
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            +91 95250 60134
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <NavLink to="/" className="flex flex-col items-start lg:items-center">
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-[0.1em] text-brand-black leading-none uppercase">
              Manpasand
            </span>
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-gray mt-1">Collection</p>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
            {LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "transition-colors relative py-2",
                    isActive ? "text-brand-black font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-black" : "text-brand-gray hover:text-brand-black"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* User Utility placeholder (like cart/search in retail sites) */}
          <div className="hidden md:flex gap-4 items-center text-xs uppercase tracking-widest font-bold">
            <NavLink to="/contact" className="hover:text-brand-gray transition-colors">Find Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-brand-light border-t border-brand-border"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] uppercase tracking-widest font-bold p-3 transition-colors border-b border-brand-border/50",
                      isActive ? "text-brand-black" : "text-brand-gray hover:text-brand-black"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
