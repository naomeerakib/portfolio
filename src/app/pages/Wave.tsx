import Slideshow, { type Slide } from '../components/Slideshow';
import { categoryRoutes, portfolioProjects } from '../data/portfolio';
import { waveGalleryItems } from '../data/waveGallery';

/*
 * Wave: the landing page. A full-screen slideshow with an invisible 4 x 4
 * hover grid (16 cells, one per slide). Clicking opens the slide's project.
 * The slides come from waveGalleryItems (src/app/data/waveGallery.ts):
 * add, remove or reorder them there. Keep it at 16 to fill the grid.
 */

const slides: Slide[] = waveGalleryItems.map((item) => {
  const project = portfolioProjects.find((p) => p.slug === item.projectSlug);
  return {
    id: item.id,
    src: item.src,
    alt: item.alt,
    caption: project?.title ?? item.projectSlug.replace(/-/g, ' '),
    href: `/${categoryRoutes[item.category]}/${item.projectSlug}`,
  };
});

export default function Wave() {
  return <Slideshow slides={slides} cols={4} rows={4} />;
}
