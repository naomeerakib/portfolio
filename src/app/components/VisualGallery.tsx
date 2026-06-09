import { Link } from 'react-router';
import { categoryRoutes } from '../data/portfolio';
import type { WaveGalleryItem } from '../data/waveGallery';

type VisualGalleryProps = {
  items: WaveGalleryItem[];
};

export default function VisualGallery({ items }: VisualGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="relative">
          <Link
            to={`/${categoryRoutes[item.category]}/${item.projectSlug}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-0"
            aria-label={`Open project page for ${item.projectSlug.replace(/-/g, ' ')}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading={item.priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={item.priority ? 'high' : 'auto'}
              className={`aspect-[16/9] w-full object-cover grayscale transition duration-300 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0 ${item.imageClassName ?? ''}`}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}
