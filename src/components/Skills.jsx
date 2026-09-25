import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills, skillIcons } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-32 border-b border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
          EXPERTISE
        </span>
        <h2 className="font-display font-extrabold clamp-h2 text-charcoal">
          Technical Skills
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items], i) => {
          const Icon = Icons[skillIcons[category]] || Icons.Code2;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center transition-all duration-300 group-hover:bg-emerald group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold bg-gray-50 border border-gray-200/80 text-charcoal/90 px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

