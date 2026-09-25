import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { education, achievements } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-32 border-b border-gray-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* EDUCATION */}
        <div>
          <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
            TIMELINE
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-10">
            Education
          </h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200/80" />
            <div className="space-y-6">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative pl-7"
                >
                  <span className="absolute left-0 top-2.5 h-3.5 w-3.5 rounded-full bg-white border-2 border-emerald transition-all duration-300 group-hover:bg-emerald" />
                  <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-base sm:text-lg text-ink">{e.degree}</h3>
                      <span className="text-xs font-bold bg-emerald/10 text-emerald px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {e.badge}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal/60 mb-3 font-semibold">
                      {e.school} · {e.period}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div>
          <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
            ACCOLADES
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-10">
            Achievements
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white border border-gray-200/80 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-300/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 text-ink"
              >
                <div className="h-9 w-9 rounded-xl flex items-center justify-center mb-4 bg-emerald/10 text-emerald transition-all duration-300 group-hover:bg-emerald group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald/30">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-base mb-1.5 leading-snug text-ink">{a.title}</h4>
                <p className="text-[10px] font-bold tracking-wider mb-2.5 uppercase text-charcoal/60">
                  {a.org}
                </p>
                <p className="text-xs leading-relaxed font-medium text-charcoal/80">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

