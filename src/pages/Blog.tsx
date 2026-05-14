import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: 'The Essential Guide to Summer Wedding Wear',
    excerpt: 'Discover lightweight fabrics and subtle pastel color palettes that keep you comfortable while looking elegant during summer celebrations.',
    date: 'April 15, 2024',
    author: 'Style Team',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Decoding the Sherwani: A Groom’s Handbook',
    excerpt: 'From intricate zardozi embroidery to the perfect accessories. Everything you need to know about selecting the ideal sherwani for your big day.',
    date: 'April 02, 2024',
    author: 'Style Team',
    image: 'https://images.unsplash.com/photo-1601644783321-70059e51cde6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Saree Draping Styles for Modern Festivities',
    excerpt: 'Move beyond the classic drape. We explore contemporary ways to style your sarees that blend tradition with modern chic silhouettes.',
    date: 'March 28, 2024',
    author: 'Style Team',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  }
];

export function Blog() {
  return (
    <div className="py-16 bg-brand-white min-h-screen">
      <SEO 
        title="Blog & Style Guides" 
        description="Read the latest fashion trends, styling tips, and news from Manpasand Collection in Chakia." 
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-brand-black mb-6 uppercase tracking-tight">Style & Stories</h1>
          <p className="text-sm text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Insights, trends, and updates straight from our store experts. Elevate your wardrobe with our curated advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="h-80 overflow-hidden relative mb-6 bg-brand-light">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3"/> {post.date}</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-brand-black mb-3 line-clamp-2 uppercase tracking-wide group-hover:text-brand-gray transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-brand-gray mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#read" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-brand-black hover:text-brand-gray transition-colors mt-auto">
                  Read Article <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
