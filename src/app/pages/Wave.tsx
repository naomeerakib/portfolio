import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { categoryRoutes, portfolioProjects } from '../data/portfolio';
import { waveGalleryItems } from '../data/waveGallery';

/*
 * Wave: the landing page. One full-screen slide at a time, no scrolling.
 *  - Desktop: the screen is split into an invisible 4 x 4 grid of cells,
 *    one per slide (16 in total). Moving the mouse over a cell shows that
 *    slide; clicking opens its project. Arrow keys and Tab also move
 *    between slides.
 *  - Mobile: swipe left/right to change project, tap to open it.
 * The slides come from waveGalleryItems (src/app/data/waveGallery.ts):
 * add, remove or reorder them there. Keep it at 16 to fill the grid.
 */

const slides = waveGalleryItems.map((item) => {
  const project = portfolioProjects.find((p) => p.slug === item.projectSlug);
  return {
    ...item,
    title: project?.title ?? item.projectSlug.replace(/-/g, ' '),
    href: `/${categoryRoutes[item.category]}/${item.projectSlug}`,
  };
});

const pad = (n: number) => String(n).padStart(2, '0');

export default function Wave() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const swiped = useRef(false);
  const navigate = useNavigate();
  const total = slides.length;

  const step = useCallback(
    (delta: number) => setCurrent((index) => (index + delta + total) % total),
    [total],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [step]);

  const slide = slides[current];

  return (
    <main className="fixed inset-0 overflow-hidden bg-white text-[15px] text-[#1a1a1a]">
      {/* Header: name (navigation sits on the right) */}
      <header className="pointer-events-none absolute left-[15px] top-[40px] z-20 hidden md:flex">
        <p className="w-[150px] shrink-0">RAKIB,</p>
        <p>Naomee</p>
      </header>

      {/* Slides: every image is stacked in the same place; only the current one is visible */}
      <div className="absolute inset-0 px-4 pb-[64px] pt-[72px] md:px-[50px] md:pb-[84px] md:pt-[84px]">
        <div className="relative h-full w-full">
          {slides.map((item, index) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              loading="eager"
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              aria-hidden={index !== current}
              className={`absolute inset-0 h-full w-full object-contain ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption: slide count and project title */}
      <footer
        className="pointer-events-none absolute bottom-[20px] left-4 z-20 flex md:bottom-[40px] md:left-[15px]"
        aria-live="polite"
      >
        <p className="w-[72px] shrink-0 md:w-[150px]">
          {pad(current + 1)}, {pad(total)}
        </p>
        <p>{slide.title}</p>
      </footer>

      {/* Desktop: invisible 4 x 4 grid of hover cells, one per slide */}
      <nav className="absolute inset-0 z-30 hidden grid-cols-4 grid-rows-4 md:grid" aria-label="Projects">
        {slides.map((item, index) => (
          <Link
            key={item.id}
            to={item.href}
            className="block h-full w-full outline-none"
            aria-label={`${item.title}, ${index + 1} of ${total}`}
            onMouseEnter={() => setCurrent(index)}
            onFocus={() => setCurrent(index)}
          />
        ))}
      </nav>

      {/* Mobile: swipe to change project, tap to open it */}
      <div
        className="absolute inset-x-0 bottom-0 top-[72px] z-30 md:hidden"
        role="link"
        aria-label={`Open ${slide.title}`}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          swiped.current = false;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = touchStartX.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 50) {
            swiped.current = true;
            step(distance > 0 ? 1 : -1);
          }
          touchStartX.current = null;
        }}
        onClick={() => {
          if (!swiped.current) navigate(slide.href);
          swiped.current = false;
        }}
      />
    </main>
  );
}
