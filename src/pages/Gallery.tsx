import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'Wedding', 'Ethnic', 'Mens', 'Party Wear'];

const ITEMS = [
  {
    id: 1,
    title: 'Bridal Lehenga Collection',
    desc: 'Intricate embroidery and rich crimson hues perfect for your special day.',
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200',
    category: 'Wedding',
    size: 'large'
  },
  {
    id: 2,
    title: 'Banarasi Heritage',
    desc: 'Timeless handwoven masterpieces from the ghats of Banaras.',
    img: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=80&w=800',
    category: 'Ethnic',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Mens Festive Kurta',
    desc: 'Comfortable yet royal kurta sets for festive occasions.',
    img: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=800',
    category: 'Mens',
    size: 'tall'
  },
  {
    id: 4,
    title: 'Modern Party Gowns',
    desc: 'Elegant western influenced gowns for evening parties.',
    img: 'https://images.unsplash.com/photo-1566160975990-e152f20bd5e1?auto=format&fit=crop&q=80&w=800',
    category: 'Party Wear',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Designer Silk Sarees',
    desc: 'Authentic silk sarees with vibrant traditional borders.',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    category: 'Ethnic',
    size: 'tall'
  },
  {
    id: 6,
    title: 'Sherwani Classics',
    desc: 'Regal sherwanis for grooms and groomsmen.',
    img: 'https://images.unsplash.com/photo-1601644783321-70059e51cde6?auto=format&fit=crop&q=80&w=1200',
    category: 'Wedding',
    size: 'large'
  },
  {
    id: 7,
    title: 'Georgette Elegance',
    desc: 'Lightweight, flowy, and effortlessly beautiful occasion wear.',
    img: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=800',
    category: 'Party Wear',
    size: 'medium'
  }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof ITEMS[0] | null>(null);

  const filteredItems = ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="py-16 bg-brand-white min-h-screen">
      <SEO 
        title="Gallery" 
        description="Browse our high-quality gallery of ethnic wear, sarees, kurtas, and party wear at Manpasand Collection." 
      />
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-brand-black mb-6 uppercase tracking-tight">Our Collection</h1>
          <p className="text-sm text-brand-gray max-w-2xl mx-auto leading-relaxed mb-10">
            A curated glimpse into our diverse range of clothing. Visit our store in Chakia to explore the full catalog alongside personalized service.
          </p>

          {/* Filtering Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pb-6 max-w-3xl mx-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-none outline-none border",
                  activeCategory === category 
                    ? "bg-brand-black text-brand-white border-brand-black" 
                    : "bg-brand-white text-brand-gray border-brand-border hover:border-brand-black hover:text-brand-black"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={cn(
                  "group relative bg-brand-light overflow-hidden cursor-pointer",
                  // Dynamically sizing items
                  item.size === 'large' && "md:col-span-2 md:row-span-2",
                  item.size === 'tall' && "md:row-span-2",
                  item.size === 'medium' && "md:col-span-1 md:row-span-1"
                )}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-brand-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-brand-gray text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.2em] mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-brand-black mb-2 uppercase tracking-wide">{item.title}</h3>
                  <div className="mt-4 w-10 h-10 border border-brand-black flex items-center justify-center rounded-full text-brand-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-white p-0 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-brand-light hover:bg-brand-black text-brand-black hover:text-brand-white transition-colors duration-300 z-50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full sm:h-auto max-w-7xl max-h-[90vh] flex flex-col md:flex-row bg-brand-white overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="flex-1 relative h-[50vh] md:h-[85vh] bg-brand-light flex items-center justify-center">
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-96 p-8 md:p-12 flex flex-col justify-center bg-brand-white border-t md:border-t-0 md:border-l border-brand-border">
                <div className="mb-auto mt-auto">
                  <span className="inline-block text-brand-gray text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    {selectedImage.category}
                  </span>
                  <h2 className="font-sans text-3xl font-bold text-brand-black mb-4 uppercase tracking-tight">{selectedImage.title}</h2>
                  <p className="text-sm text-brand-gray leading-relaxed mb-8">
                    {selectedImage.desc}
                  </p>
                  
                  <div className="pt-8 border-t border-brand-border w-full">
                    <p className="text-[10px] uppercase tracking-widest text-brand-black mb-4 font-bold">Ready to purchase?</p>
                    <a href="/contact" className="w-full block text-center py-4 bg-brand-black hover:bg-brand-gray text-brand-white text-[11px] uppercase tracking-widest font-bold transition-colors">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
