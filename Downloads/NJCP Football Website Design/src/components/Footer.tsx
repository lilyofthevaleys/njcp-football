import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-h92xdwox63";
import njcpLogo from "figma:asset/3f7cd96ea4fb2c9a658f5d297144dcc8ca9f7a65.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(179,0,0,0.2)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <img 
              src={njcpLogo} 
              alt="NJCP Football Conference"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Building champions on and off the field through elite training and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#b30000] transition-colors">Home</Link></li>
              <li><Link to="/athletes" className="text-gray-400 hover:text-[#b30000] transition-colors">Athletes</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-[#b30000] transition-colors">Team</Link></li>
              <li><Link to="/coaches" className="text-gray-400 hover:text-[#b30000] transition-colors">Coaches</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>info@njcpfootball.com</li>
              <li>(555) 123-4567</li>
              <li>123 Sports Complex Dr</li>
              <li>Athletic City, AC 12345</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={svgPaths.p71bf140} />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={svgPaths.p26d1a700} />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                <svg className="w-5 h-6" fill="currentColor" viewBox="0 0 21 24">
                  <path d={svgPaths.p27bc4980} />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                <svg className="w-7 h-6" fill="currentColor" viewBox="0 0 27 24">
                  <path d={svgPaths.p3648f300} />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[rgba(179,0,0,0.2)] text-center text-gray-400">
          © 2024 NJCP Football. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
