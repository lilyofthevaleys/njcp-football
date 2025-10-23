import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import njcpLogo from "figma:asset/3f7cd96ea4fb2c9a658f5d297144dcc8ca9f7a65.png";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Athletes', path: '/athletes' },
    { name: 'Team', path: '/team' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm border-b border-[rgba(179,0,0,0.2)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/">
              <motion.img
                src={njcpLogo}
                alt="NJCP Football Conference"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-white hover:text-[#b30000] transition-colors"
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#b30000]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(179, 0, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b30000] text-white px-6 py-2 rounded-lg font-semibold"
            >
              Join NJCP
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-[rgba(179,0,0,0.2)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 ${
                  isActive(link.path) ? 'text-[#b30000]' : 'text-white'
                } hover:text-[#b30000] transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-[#b30000] text-white px-6 py-3 rounded-lg font-semibold">
              Join NJCP
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
