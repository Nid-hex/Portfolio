import fastApi from '../assets/FastAPI.png';
import flutter from '../assets/Flutter.png';
import git from '../assets/Git.png';
import gitHub from '../assets/GitHub.png';
import javaScript from '../assets/JavaScript.png';
import linux from '../assets/Linux.png';
import reactLogo from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import dart from '../assets/Dart.png';
import dBeaver from '../assets/DBeaver.png';
import express from '../assets/Express.png';
import vercel from '../assets/Vercel.png';

const techLogos = [
  { name: 'FastAPI', src: fastApi },
  { name: 'Flutter', src: flutter },
  { name: 'Git', src: git },
  { name: 'GitHub', src: gitHub },
  { name: 'JavaScript', src: javaScript },
  { name: 'Linux', src: linux },
  { name: 'React', src: reactLogo },
  { name: 'Tailwind', src: tailwind },
  { name: 'Dart', src: dart },
  { name: 'DBeaver', src: dBeaver },
  { name: 'Express', src: express },
  { name: 'Vercel', src: vercel },
];

export default function TechMarquee() {
  const items = [...techLogos, ...techLogos, ...techLogos];

  return (
    <section className="border-y border-gray-200/70 bg-gray-50/50 py-8 overflow-hidden">
      <div className="flex items-center justify-center gap-1.5 mb-6">
        <span className="text-emerald font-mono text-xs font-bold">&gt;_</span>
        <p className="text-center text-xs font-bold tracking-[0.25em] text-charcoal/70 uppercase">
          CORE TECH STACK
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track gap-4 px-4">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-white border border-gray-200/80 rounded-2xl px-6 py-3 shrink-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] h-14 min-w-[96px] sm:min-w-[110px] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-300/50 hover:border-gray-400"
            >
              <img
                src={t.src}
                alt={t.name}
                className="h-6 sm:h-7 w-auto object-contain filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
