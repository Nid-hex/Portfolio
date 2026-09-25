import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block bg-gray-200/90 text-charcoal text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 uppercase">
          LET'S CONNECT
        </span>

        <h2 className="font-display font-extrabold clamp-h2 text-charcoal mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.1fr] gap-10 lg:gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase">AVAILABLE FOR WORK</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-xs font-medium">
              I'm currently available for freelance and full-time engineering opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-charcoal/60 mb-1 uppercase">
                <Mail className="w-3.5 h-3.5" /> EMAIL
              </p>
              <a
                href="mailto:hello@nidhi.dev"
                className="text-sm font-semibold text-ink hover:text-emerald transition-colors"
              >
                nidhi07290@gmail.com
              </a>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-charcoal/60 mb-1 uppercase">
                <Globe className="w-3.5 h-3.5" /> WEBSITE
              </p>
              <span className="text-sm font-semibold text-ink">nidhi.dev</span>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-charcoal/60 mb-1 uppercase">
                <MapPin className="w-3.5 h-3.5" /> LOCATION
              </p>
              <span className="text-sm font-semibold text-ink">India · Remote friendly</span>
            </div>
          </div>

          <div className="border border-emerald/30 bg-emerald/5 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50 hover:border-emerald/50">
            <p className="font-display font-extrabold text-lg sm:text-xl text-ink leading-snug mb-5">
              LET'S BUILD SOMETHING GREAT TOGETHER →
            </p>
            <div className="flex flex-col xs:flex-row gap-3">
              <a
                href="mailto:nidhi07290@gmail.com"
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-charcoal text-xs font-bold px-5 py-3 rounded-full hover:bg-ink hover:text-white hover:border-ink hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-200 hover:-translate-y-0.5 w-full xs:w-auto"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a
                href="https://wa.me/917361922309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-charcoal text-xs font-bold px-5 py-3 rounded-full hover:bg-ink hover:text-white hover:border-ink hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-200 hover:-translate-y-0.5 w-full xs:w-auto"
              >
                <Phone className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/60">
          <p>© 2026 Nidhi Kumari. All rights reserved.</p>
          <div className="flex items-center gap-5 font-medium">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Instagram</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

