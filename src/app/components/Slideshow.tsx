import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';

/*
 * Full-screen, no-scroll slideshow used by Wave (4 x 4 grid) and every
 * project page (1 x 10 strips).
 *  - Desktop: the screen is split into an invisible grid of `cols` x `rows`
 *    cells. Hovering a cell shows its slide; clicking opens the slide's
 *    link (if it has one). Arrow keys and Tab also move between slides.
 *    If there are fewer slides than cells, neighbouring cells share a slide.
 *  - Mobile: swipe left/right to change slide, tap to open its link.
 */

export type Slide = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

type SlideshowProps = {
  slides: Slide[];
  cols: number;
  rows: number;
  emptyCaption?: string;
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function Slideshow({ slides, cols, rows, emptyCaption = '' }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const swiped = useRef(false);
  const navigate = useNavigate();
  const total = slides.length;
  const cells = cols * rows;

  // Reset to the first slide when the slide set changes (e.g. another project)
  useEffect(() => setCurrent(0), [slides]);

  const step = useCallback(
    (delta: number) => {
      if (total > 0) setCurrent((index) => (index + delta + total) % total);
    },
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

  const slide = slides[Math.min(current, total - 1)];
  const slideForCell = (cell: number) => Math.min(total - 1, Math.floor((cell * total) / cells));

  return (
    <main className="fixed inset-0 overflow-hidden bg-white text-[15px] text-[#1a1a1a]">
      {/* Header: name (navigation sits on the right) */}
      <header className="pointer-events-none absolute left-[15px] top-[40px] z-20 hidden md:flex">
        <p className="w-[150px] shrink-0">RAKIB,</p>
        <p>Naomee</p>
      </header>

      {/* Slides: stacked in the same place; only the current one is visible */}
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

      {/* Caption: slide count and title */}
      <footer
        className="pointer-events-none absolute bottom-[20px] left-4 z-20 flex md:bottom-[40px] md:left-[15px]"
        aria-live="polite"
      >
        <p className="w-[72px] shrink-0 md:w-[150px]">
          {total > 0 ? `${pad(current + 1)}, ${pad(total)}` : ''}
        </p>
        <p>{slide ? slide.caption : emptyCaption}</p>
      </footer>

      {total > 0 && (
        <>
          {/* Desktop: invisible grid of hover cells */}
          <nav
            className={`absolute inset-0 z-30 hidden md:grid ${rows === 1 ? 'cursor-ew-resize' : ''}`}
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
            aria-label="Slides"
          >
            {Array.from({ length: cells }, (_, cell) => {
              const index = slideForCell(cell);
              const item = slides[index];
              const label = `${item.caption}, ${index + 1} of ${total}`;
              const show = () => setCurrent(index);
              return item.href ? (
                <Link
                  key={cell}
                  to={item.href}
                  className="block h-full w-full outline-none"
                  aria-label={label}
                  onMouseEnter={show}
                  onFocus={show}
                />
              ) : (
                <div key={cell} className="h-full w-full" aria-label={label} onMouseEnter={show} />
              );
            })}
          </nav>

          {/* Mobile: swipe to change slide, tap to open it */}
          <div
            className="absolute inset-x-0 bottom-0 top-[72px] z-30 md:hidden"
            role={slide?.href ? 'link' : undefined}
            aria-label={slide?.href ? `Open ${slide.caption}` : undefined}
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
              if (!swiped.current && slide?.href) navigate(slide.href);
              swiped.current = false;
            }}
          />
        </>
      )}
    </main>
  );
}
