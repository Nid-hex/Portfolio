import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-28 bg-white border-b border-gray-200/70 rounded-b-[32px] sm:rounded-b-[60px] lg:rounded-b-[75px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-[1.2fr_0.8fr] sm:grid-cols-[1.3fr_1fr] gap-3 sm:gap-6 lg:gap-8 items-center">
          {/* =========================================
              LEFT SIDE - TEXT
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Small pre-heading */}
            <div className="mb-2 sm:mb-5">
              <p className="text-[9px] xs:text-xs font-bold tracking-[0.12em] sm:tracking-[0.2em] text-charcoal/70 uppercase">
                DESIGNING MEANINGFUL DIGITAL EXPERIENCES
              </p>
            </div>

            {/* Name */}
            <h1 className="font-display font-bold uppercase clamp-hero text-charcoal tracking-tight">
              NIDHI KUMARI
            </h1>

            {/* Job title */}
            <p className="mt-2 sm:mt-4 font-display font-extrabold text-xs xs:text-sm sm:text-xl md:text-2xl text-emerald tracking-wide">
              FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER
            </p>

            {/* Description */}
            <p className="mt-3 sm:mt-6 max-w-lg text-xs xs:text-sm sm:text-lg text-charcoal/85 leading-relaxed font-semibold">
              I craft digital experiences and scalable backends that are fast,
              intuitive, and built with purpose.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 sm:mt-10 flex flex-col xs:flex-row gap-2 sm:gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-gray-300 bg-white text-charcoal text-[11px] xs:text-xs sm:text-sm font-bold px-3.5 py-2 xs:px-5 xs:py-3 sm:px-6 sm:py-3.5 rounded-full hover:bg-ink hover:text-white hover:border-ink hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-200 hover:-translate-y-0.5 text-center shrink-0 whitespace-nowrap"
              >
                View Selected Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center border border-gray-300 bg-white text-charcoal text-[11px] xs:text-xs sm:text-sm font-bold px-3.5 py-2 xs:px-5 xs:py-3 sm:px-6 sm:py-3.5 rounded-full hover:bg-ink hover:text-white hover:border-ink hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-200 hover:-translate-y-0.5 text-center shrink-0 whitespace-nowrap"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE - PORTRAIT COMPOSITION
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[200px] xs:max-w-[280px] sm:max-w-[420px] lg:max-w-[480px] flex justify-end"
          >
            <div className="relative w-full h-[220px] xs:h-[300px] sm:h-[450px] lg:h-[500px]">
              {/* GREEN CIRCLE BACKDROP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute z-0 w-[140px] h-[140px] xs:w-[200px] xs:h-[200px] sm:w-[310px] sm:h-[310px] lg:w-[360px] lg:h-[360px] rounded-full bg-emerald top-[50px] xs:top-[65px] sm:top-[110px] right-[2%]"
              />

              {/* BLACK & WHITE PORTRAIT */}
              <motion.img
                src="/img.webp"
                alt="Nidhi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute z-10 bottom-0 right-[2%] h-[210px] xs:h-[290px] sm:h-[440px] lg:h-[490px] w-auto max-w-none object-contain object-bottom filter drop-shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}