import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

function mdToHtml(md) {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/```([\s\S]*?)```/g, (_, c) => `<pre><code>${c.trim()}</code></pre>`)
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2"/>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^\> (.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\s*[-*] (.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      if (/^<h\d|^<ul|^<pre|^<blockquote/.test(block.trim())) return block;
      return block.trim() ? `<p>${block.trim().replace(/\n/g, ' ')}</p>` : '';
    })
    .join('\n');
  return html;
}

export default function ProjectModal({ project, onClose }) {
  const [branch, setBranch] = useState('main');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) setBranch('main');
  }, [project]);

  useEffect(() => {
    if (!project) return;
    let cancelled = false;
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/${project.repo}/${branch}/README.md`)
      .then((res) => {
        if (!res.ok) throw new Error('not found');
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setContent(mdToHtml(text));
      })
      .catch(() => {
        if (!cancelled) {
          setContent(
            `<p>Couldn't load a README for branch "<strong>${branch}</strong>". Try switching branches, or view the repo directly on GitHub.</p>`
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [project, branch]);

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[70]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 h-full w-full sm:max-w-xl lg:max-w-2xl bg-white shadow-xl flex flex-col border-l border-gray-200"
          >
            <div className="flex items-center justify-between gap-3 px-6 py-5 border-b border-gray-200/80 shrink-0">
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-ink truncate">{project.name}</h3>
                <div className="flex items-center gap-2.5 mt-1.5">
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="text-xs border border-gray-200 rounded-full px-3 py-1 bg-gray-50 text-charcoal/70 focus:outline-none"
                  >
                    <option value="main">main</option>
                    <option value="master">master</option>
                  </select>
                  <a
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald font-medium hover:underline"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>
              <button
                aria-label="Close"
                onClick={onClose}
                className="shrink-0 h-8 w-8 rounded-full border border-gray-200 hover:bg-ink hover:text-white hover:border-ink transition-colors flex items-center justify-center text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div id="readme-body" className="flex-1 overflow-y-auto px-6 py-6 text-sm text-charcoal/80 leading-relaxed">
              {loading ? (
                <p className="text-charcoal/50 text-xs font-mono">Loading README…</p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

