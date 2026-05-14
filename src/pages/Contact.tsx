import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-16 md:py-24 bg-brand-white min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Visit Manpasand Collection in Chakia, Bihar. Get our address, phone number, and directions." 
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-brand-black mb-6 uppercase tracking-tight">Contact Us</h1>
          <p className="text-sm text-brand-gray max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Visit our store to explore the entire collection or contact us for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Contact Form Area */}
          <div>
            <h2 className="font-sans text-xl font-bold mb-8 text-brand-black uppercase tracking-wide">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Full Name</label>
                  <input type="text" className="w-full pb-3 bg-transparent border-0 border-b border-brand-border focus:ring-0 focus:outline-none focus:border-brand-black transition-colors text-sm text-brand-black placeholder-brand-gray/50" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Phone</label>
                  <input type="tel" className="w-full pb-3 bg-transparent border-0 border-b border-brand-border focus:ring-0 focus:outline-none focus:border-brand-black transition-colors text-sm text-brand-black placeholder-brand-gray/50" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Message</label>
                <textarea rows={4} className="w-full pb-3 bg-transparent border-0 border-b border-brand-border focus:ring-0 focus:outline-none focus:border-brand-black transition-colors resize-none text-sm text-brand-black placeholder-brand-gray/50" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-brand-black hover:bg-brand-gray text-brand-white text-[11px] uppercase tracking-widest font-bold transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details Panel */}
          <div className="lg:border-l border-brand-border lg:pl-24 flex flex-col justify-center">
            <h2 className="font-sans text-xl font-bold text-brand-black mb-8 uppercase tracking-wide">Visit Our Boutique</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-brand-black" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Our Location</h3>
                  <address className="not-italic text-sm text-brand-black leading-relaxed font-medium">
                    CHAKIA, MOTIHARI ROAD CHAKIA<br />
                    CHAKIA, Purbi Champaran<br />
                    Bihar, 845412<br />
                    India
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-brand-black" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Phone Number</h3>
                  <p className="text-sm font-medium text-brand-black tracking-wide">
                    <a href="tel:+919525060134" className="hover:text-brand-gray transition-colors">+91 95250 60134</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-brand-black" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Email Address</h3>
                  <p className="text-sm font-medium text-brand-black">
                    <a href="mailto:info@manpasandcollection.co.in" className="hover:text-brand-gray transition-colors">info@manpasandcollection.co.in</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-5 h-5 text-brand-black" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Business Hours</h3>
                  <p className="text-sm text-brand-black font-medium leading-relaxed">
                    Monday - Sunday<br />
                    10:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
