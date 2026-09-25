import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const desktopSocials = [
    { name: "GitHub", href: "https://github.com/Nid-hex" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nidhi-kmari/edit/intro/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" },
  ];

  const mobileSocials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nidhi-kmari/edit/intro/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/", icon: Github },
    { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nidhi07290@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP / HOME HEADER
          Visible when user is at the top of homepage (Image 1)
      ====================================================== */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/70"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3">
              {/* DESKTOP LEFT: EMAIL PILL + COPY + BLACK RESUME BUTTON (Image 1) */}
              <div className="hidden sm:flex items-center gap-1.5 border border-gray-200/90 rounded-full bg-white p-1 shadow-sm">
                <div className="px-3.5 sm:px-4 py-1.5 text-xs font-medium text-charcoal/70">
                  nidhi07290@gmail.com
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-charcoal text-xs font-semibold hover:bg-black hover:text-white hover:border-black hover:shadow-md hover:shadow-gray-400/40 transition-all"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-ink text-white text-xs font-semibold hover:bg-black hover:shadow-md hover:shadow-gray-400/50 transition-all shrink-0 whitespace-nowrap ml-0.5"
                >
                  <span className="text-xs">↓</span>
                  Resume
                </a>
              </div>

              {/* MOBILE LEFT: BLACK EMAIL BUTTON + WHITE CV BUTTON (Mobile Image) */}
              <div className="flex sm:hidden items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold tracking-wide hover:bg-black hover:shadow-md hover:shadow-gray-400/40 active:scale-95 shadow-sm transition-all"
                >
                  {copied ? "Copied!" : "Email"}
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-gray-200 bg-white text-charcoal text-xs font-medium hover:bg-ink hover:text-white hover:border-ink hover:shadow-md hover:shadow-gray-400/40 transition-all"
                >
                  <span className="text-xs">↓</span>
                  CV
                </a>
              </div>

              {/* DESKTOP RIGHT: TEXT SOCIAL LINKS WITH SLASHES (Image 1) */}
              <div className="hidden md:flex items-center gap-2">
                {desktopSocials.map((social, index) => (
                  <div key={social.name} className="flex items-center">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs font-medium text-charcoal/60 hover:text-ink transition-colors"
                    >
                      {social.name}
                    </a>
                    {index < desktopSocials.length - 1 && (
                      <span className="text-gray-300 mx-1.5 text-xs font-normal">/</span>
                    )}
                  </div>
                ))}
              </div>

              {/* MOBILE RIGHT: CIRCULAR ICON BUTTONS */}
              <div className="flex md:hidden items-center gap-2">
                {mobileSocials.map((social) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-charcoal/80 hover:bg-ink hover:text-white hover:border-ink hover:shadow-md hover:shadow-gray-400/40 transition-all shrink-0"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* =====================================================
          SCROLLED / FLOATING PILL HEADER
          Appears after scrolling (Image 2)
      ====================================================== */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8"
          >
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-full shadow-lg px-3.5 sm:px-4 py-2 flex items-center justify-between gap-3">
              {/* LEFT: AVATAR + NAME (Image 2) */}
              <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img
                    src="/img.webp"
                    alt="Nidhi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="hidden sm:block font-display text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-emerald">
                  Nidhi Kumari
                </span>
              </a>

              {/* CENTER DESKTOP NAVIGATION (Image 2) */}
              <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-charcoal/70 transition-all duration-200 hover:bg-ink hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* RIGHT: WHITE RESUME + BLACK HIRE ME BUTTON (Image 2) */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <a
                  href="/resume.pdf"
                  download
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2 rounded-full border border-gray-200 bg-white text-charcoal text-xs font-semibold transition-all duration-200 hover:bg-ink hover:text-white hover:border-ink hover:shadow-lg hover:shadow-gray-400/50 hover:-translate-y-0.5 shrink-0 whitespace-nowrap shadow-sm"
                >
                  <span className="text-xs">↓</span>
                  Resume
                </a>

                {/* Hire Me Black Pill Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2 rounded-full bg-ink text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:bg-black hover:shadow-lg hover:shadow-gray-400/50 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
                >
                  Hire Me
                </a>

                {/* MOBILE MENU BUTTON (Hamburger) */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-9 h-9 rounded-full border border-gray-200/80 bg-white flex items-center justify-center text-charcoal transition-all duration-200 hover:bg-ink hover:text-white hover:shadow-md hover:shadow-gray-400/40 shrink-0"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden mt-2 bg-white border border-gray-200/90 rounded-2xl shadow-lg p-3 max-w-sm mx-auto"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2.5 rounded-xl text-xs font-medium text-charcoal hover:bg-ink hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}

                  <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
                    <a
                      href="/resume.pdf"
                      download
                      className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 bg-white text-charcoal text-xs font-medium hover:bg-ink hover:text-white hover:border-ink transition-colors"
                    >
                      ↓ Resume
                    </a>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-center gap-3">
                    {mobileSocials.map((social) => {
                      const IconComp = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-charcoal hover:bg-ink hover:text-white transition-colors"
                        >
                          <IconComp className="w-3.5 h-3.5" />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}




