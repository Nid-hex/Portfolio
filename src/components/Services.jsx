import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-32 border-b border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
          WHAT I OFFER
        </span>
        <h2 className="font-display font-extrabold clamp-h2 text-charcoal">
          Collaborating to build high-performance products
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-0.5"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emerald group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

