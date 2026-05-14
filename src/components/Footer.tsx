import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-white border-t border-brand-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="font-sans text-2xl font-bold tracking-[0.1em] text-brand-black leading-none uppercase block mb-6">
              Manpasand
            </span>
            <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
              Chakia's premier destination for exquisite ethnic wear and modern fashion. Elevating wardrobes with unparalleled quality and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><NavLink to="/" className="text-sm text-brand-gray hover:text-brand-black transition-colors">Home</NavLink></li>
              <li><NavLink to="/gallery" className="text-sm text-brand-gray hover:text-brand-black transition-colors">Shop / Gallery</NavLink></li>
              <li><NavLink to="/blog" className="text-sm text-brand-gray hover:text-brand-black transition-colors">Style & Stories</NavLink></li>
              <li><NavLink to="/contact" className="text-sm text-brand-gray hover:text-brand-black transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black mb-6">Store Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-gray">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>CHAKIA, MOTIHARI ROAD<br/>Purbi Champaran, Bihar 845412</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-gray">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 95250 60134</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-gray">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@manpasandcollection.co.in" className="hover:text-brand-black transition-colors">info@manpasandcollection.co.in</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            &copy; {new Date().getFullYear()} Manpasand Collection. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-gray">
            <a href="#" className="hover:text-brand-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
