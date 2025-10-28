"use client";

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-16 w-auto mb-4 text-xl font-bold text-gold">
              NJCP FOOTBALL
            </div>
            <p className="text-gray-300 mb-4">
              National Junior College Football League - Developing tomorrow's champions today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-gold">Home</Link></li>
              <li><Link href="/athletes" className="text-gray-300 hover:text-gold">Athletes</Link></li>
              <li><Link href="/coaches" className="text-gray-300 hover:text-gold">Coaches</Link></li>
              <li><Link href="/teams" className="text-gray-300 hover:text-gold">Teams</Link></li>
              <li><Link href="/sponsors" className="text-gray-300 hover:text-gold">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold">Rules & Regulations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Scholarships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Training Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">College Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>1234 Stadium Drive</p>
              <p>College Park, FL 32789</p>
              <p className="mt-2">info@njcpfootball.org</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 NJCP Football. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gold">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}