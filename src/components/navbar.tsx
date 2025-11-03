"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-njcpBlack text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-heading font-extrabold text-2xl tracking-wide text-njcpRed">NJCP</div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-njcpRed transition-colors">
            Home
          </Link>
          <Link href="/athletes" className="hover:text-njcpRed transition-colors">
            Athletes
          </Link>
          <Link href="/coaches" className="hover:text-njcpRed transition-colors">
            Coaches
          </Link>
          <Link href="/teams" className="hover:text-njcpRed transition-colors">
            Teams
          </Link>
          <Link href="/sponsors" className="hover:text-njcpRed transition-colors">
            Sponsors
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button asChild variant="default" className="bg-njcpRed text-white hover:bg-njcpRed/90">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-njcpBlack border-t border-njcpRed/20">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="py-2 hover:text-njcpRed transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/athletes" 
                className="py-2 hover:text-njcpRed transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Athletes
              </Link>
              <Link 
                href="/coaches" 
                className="py-2 hover:text-njcpRed transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coaches
              </Link>
              <Link 
                href="/teams" 
                className="py-2 hover:text-njcpRed transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Teams
              </Link>
              <Link 
                href="/sponsors" 
                className="py-2 hover:text-njcpRed transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sponsors
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}