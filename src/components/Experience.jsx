import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24 sm:py-32 border-b border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
          MY JOURNEY
        </span>
        <h2 className="font-display font-extrabold clamp-h2 text-charcoal">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-16 relative">
        <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-3 w-px bg-gray-200/80" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-2.5 h-3.5 w-3.5 rounded-full bg-emerald ring-4 ring-emerald/15" />
              <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink">{e.role}</h3>
                  <span className="text-xs font-semibold bg-gray-100/80 text-charcoal/80 px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5 border border-gray-200/60">
                    <Calendar className="w-3.5 h-3.5" /> {e.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal/70 mb-5 flex items-center gap-1.5 font-semibold">
                  {e.company} ·
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-charcoal/40" />
                    {e.location}
                  </span>
                </p>
                <ul className="space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

