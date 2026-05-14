import { SEO } from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <SEO 
        title="Home" 
        description="Welcome to Manpasand Collection, Chakia's premier clothing store for ethnic and modern fashion." 
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-light">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=1920" 
            alt="Beautiful ethnic wear fabrics" 
            className="w-full h-full object-cover object-top opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center mt-32">
          <div className="bg-brand-white/90 backdrop-blur-sm p-8 md:p-12 text-center max-w-2xl border border-brand-border">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray mb-4 block">New Arrivals</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-4xl md:text-6xl font-bold text-brand-black mb-4 uppercase tracking-tighter leading-none"
            >
              The Summer Edit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm opacity-80 mb-8 leading-relaxed font-normal text-brand-black"
            >
              Discover the finest collection of ethnic wear, contemporary styles, and premium fabrics in the heart of Chakia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <NavLink 
                to="/gallery" 
                className="px-10 py-4 bg-brand-black text-brand-white hover:bg-brand-gray text-[11px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors"
              >
                Shop Now <ArrowRight className="w-4 h-4 ml-2" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Snippet */}
      <section className="py-24 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-brand-black uppercase tracking-tight">Shop By Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Menswear', img: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=800' },
              { title: 'Party Gowns', img: 'https://images.unsplash.com/photo-1550614000-4b95dd245acc?auto=format&fit=crop&q=80&w=800' }
            ].map((cat, i) => (
              <NavLink to="/gallery" key={i} className="group flex flex-col">
                <div className="relative h-96 overflow-hidden bg-brand-light mb-4">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-brand-black font-sans text-lg font-bold uppercase tracking-wide">{cat.title}</h3>
                  <ArrowRight className="w-5 h-5 text-brand-gray group-hover:text-brand-black transition-colors" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props / Why Choose Us */}
      <section className="py-20 bg-brand-light border-t border-brand-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6 text-brand-black mb-4" strokeWidth={1.5} />
              <h3 className="font-sans text-sm uppercase tracking-widest font-bold mb-2">Premium Quality</h3>
              <p className="text-xs text-brand-gray max-w-sm leading-relaxed">We carefully curate our collection to ensure the finest fabrics.</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-6 h-6 text-brand-black mb-4" strokeWidth={1.5} />
              <h3 className="font-sans text-sm uppercase tracking-widest font-bold mb-2">Trusted Locally</h3>
              <p className="text-xs text-brand-gray max-w-sm leading-relaxed">A beloved name in Chakia, building relationships over generations.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-brand-black mb-4" strokeWidth={1.5} />
              <h3 className="font-sans text-sm uppercase tracking-widest font-bold mb-2">Latest Trends</h3>
              <p className="text-xs text-brand-gray max-w-sm leading-relaxed">Stay ahead in fashion with our regularly updated collection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
