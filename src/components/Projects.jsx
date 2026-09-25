import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';

const FILTERS = ['All', 'Mobile', 'Full Stack', 'Backend'];

const statusStyle = (status) =>
  status === 'Live'
    ? 'bg-emerald/10 text-emerald'
    : status === 'Beta Version'
    ? 'bg-amber-500/10 text-amber-700'
    : 'bg-gray-100 text-charcoal/70';

export default function Projects({ onSelect }) {
  const [filter, setFilter] = useState('All');

  const list = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-32 border-b border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
          SELECTED WORK
        </span>
        <h2 className="font-display font-extrabold clamp-h2 text-charcoal">
          Featured Projects
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
              filter === f
                ? 'bg-ink text-white shadow-md shadow-gray-400/30'
                : 'bg-white border border-gray-200 text-charcoal/80 hover:border-gray-400 hover:shadow-md hover:shadow-gray-300/50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <motion.button
            key={p.name}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            onClick={() => onSelect(p)}
            className="group text-left bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-0.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className={`text-[11px] font-bold tracking-wide px-3 py-1 rounded-full ${statusStyle(p.status)}`}>
                  {p.status}
                </span>
                <ArrowUpRight className="w-4 h-4 text-charcoal/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2.5 leading-snug">
                {p.name}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium mb-6">
                {p.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold bg-gray-50 border border-gray-200/80 text-charcoal/80 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

